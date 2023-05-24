import React, { useEffect, useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId2, initialIds } from "./event-utils";
import "./calendar.css";

function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  function handleEventDrop(eventInfo) {
    const updatedEvents = events.map((event) => {
      if (event.id === eventInfo.event.id) {
        return {
          ...event,
          start: eventInfo.event.startStr,
          end: eventInfo.event.endStr || null,
        };
      }
      return event;
    });

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("새로운 이벤트 이름을 입력해주세요");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId2(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: "green",
        borderColor: "green",
      });

      const newEvent = {
        id: createEventId2(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: "green",
        borderColor: "green",
      };

      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  const handleEventClick = (clickInfo) => {
    var eventId = clickInfo.event.id;

    var isEventIncluded = checkIfEventIncluded(eventId);

    if (isEventIncluded) {
      // 이벤트가 초기이벤트에 포함되어 있을 경우 동작 수행
    } else {
      // 이벤트가 초기이벤트에 포함되어 있지 않을 경우 동작 수행
      if (
        confirm(`다음 이벤트를 삭제하시겠습니까? '${clickInfo.event.title}'`)
      ) {
        clickInfo.event.remove();
      }
    }
  };

  function checkIfEventIncluded(eventId) {
    //초기이벤트에 포함되어있는지 확인하는 함수
    return initialIds
      .map((array) => {
        return array.toString();
      })
      .includes(eventId);
  }

  function handleEventRemove(eventInfo) {
    const updatedEvents = events.filter(
      (event) => event.id !== eventInfo.event.id
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  }

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const mergedEvents = [...INITIAL_EVENTS, ...events];

  return (
    <div className="calendar-app">
      <div className="calendar-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventDrop={handleEventDrop}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          events={mergedEvents}
          eventRemove={handleEventRemove}
        />
      </div>
    </div>
  );
}

export default Calendar;
