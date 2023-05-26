import React, { useEffect, useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { INITIAL_EVENTS, createEventId2, initialIds } from "./event-utils";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { v4 as uuidv4 } from "uuid";
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

  useEffect(() => {
    const storedExternalEvents = JSON.parse(
      localStorage.getItem("externalEvents")
    );
    if (storedExternalEvents) {
      setState((state) => {
        return {
          ...state,
          externalEvents: storedExternalEvents,
        };
      });
    }
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  function handleEventDrop(eventInfo) {
    const updatedEvents = events.map((event) => {
      console.log("ok");
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
  function handleReceive(eventInfo) {
    
    const { event } = eventInfo;
    const { id, title, start, end} = event;
    // 추출된 정보를 배열에 추가 또는 원하는 작업 수행
    const eventData = {
      id,
      title,
      start,
      end,
      backgroundColor: event.backgroundColor, // 이벤트의 backgroundColor 속성 사용
      borderColor: event.borderColor, // 이벤트의 borderColor 속성 사용
      allDay: true,
    };

    if(eventData.id==="1"){
      Object.assign(eventData,{backgroundColor:"#f1a8bc",borderColor: "#f1a8bc",allDay: true});
    }
    else if(eventData.id==="2"){
      Object.assign(eventData,{backgroundColor:"#eee58a",borderColor: "#eee58a",allDay: true});
    }
    else if(eventData.id==="3"){
      Object.assign(eventData,{backgroundColor:"#c4ecb0",borderColor: "#c4ecb0",allDay: true});
    }
    else if(eventData.id==="4"){
      Object.assign(eventData,{backgroundColor:"#addbd8",borderColor: "#addbd8",allDay: true});
    }
    else{
      Object.assign(eventData,{allDay: true});
    }

    eventData.id= createEventId2();
    eventData.end= eventData.start;  
   
    const updatedEvents = [...events,eventData];
    setEvents(updatedEvents);
    localStorage.setItem("events",JSON.stringify(updatedEvents));
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("새로운 일정을 추가해주세요");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId2(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: "#c9c8cd",
        borderColor: "#c9c8cd",
      });
      const newEvent = {
        id: createEventId2(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: "#c9c8cd",
        borderColor: "#c9c8cd",
      };

      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
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

   // 외부 이벤트 목록에서 삭제
  const handleExternalEventRemove = (eventId) => {
    setState((prevState) => {
      const updatedExternalEvents = prevState.externalEvents.filter(
        (event) => event.id !== eventId
      );
      localStorage.setItem(
        "externalEvents",
        JSON.stringify(updatedExternalEvents)
      );
      return {
        ...prevState,
        externalEvents: updatedExternalEvents,
      };
    });
  };
  
   // 이벤트에서 삭제
  function handleEventRemove(eventInfo) {
    const isExternalEvent = checkIfEventIncluded(eventInfo.event.id); 
  
    if (isExternalEvent) {
      handleExternalEventRemove(eventInfo.event.id); // 외부 이벤트 삭제 함수 호출
    } else {
      const updatedEvents = events.filter(
        (event) => event.id !== eventInfo.event.id
      );
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
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

  // initial state
  const [state, setState] = useState({
    weekendsVisible: true,
    externalEvents: [
      { title: "시험기간", color: "#f1a8bc", id: "1" },
      { title: "과제마감일", color: "#eee58a", id: "2" },
      { title: "휴강일", color: "#c4ecb0", id: "3" },
      { title: "기타", color: "#addbd8", id: "4" },
    ],
  });

  // load external events
  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    let draggable = new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let id = eventEl.dataset.id;
        let title = eventEl.getAttribute("title");
        let color = eventEl.dataset.color;
        let custom = eventEl.dataset.custom;

        return {
          id: id,
          title: title,
          color: color,
          custom: custom,
          create: true,
        };
      },
    });
    return () => {
      draggable.destroy(); // 컴포넌트 언마운트 시 Draggable 인스턴스를 정리
    };
  }, []);


  // add external events
  const addEvent = () => {
    let title = prompt("추가된 이벤트의 제목을 입력하세요");
    let custom = prompt("추가된 이벤트의 부가설명을 입력하세요");
    if (title) {
      let newEvent = {
        id: uuidv4(), // 고유한 UUID 생성
        title: title,
        color: getColorByIndex(state.externalEvents.length), // 외부 이벤트 목록의 길이에 따라 색상 할당
        start: "2020-12-31",
        end: "2020-12-31",
        custom: custom,
      };

      setState((prevState) => {
        const updatedExternalEvents = [...prevState.externalEvents, newEvent];
        localStorage.setItem(
          "externalEvents",
          JSON.stringify(updatedExternalEvents)
        );
        return {
          ...prevState,
          externalEvents: updatedExternalEvents,
        };
      });

       // FullCalendar에도 이벤트 추가
    const calendarApi = calendarRef.current.getApi(); // FullCalendar의 API 객체 가져오기
    calendarApi.addEvent(newEvent)
    }
  };

  const handleEventAdd = (eventInfo) => {
    // 이벤트 추가 로직
    const newEvent = {
      id: eventInfo.event.id,
      title: eventInfo.event.title,
      start: eventInfo.event.startStr,
      end: eventInfo.event.endStr || null,
      allDay: eventInfo.event.allDay,
      backgroundColor: eventInfo.event.backgroundColor,
      borderColor: eventInfo.event.borderColor,
    };
  
    // events 배열에 추가된 이벤트 저장
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };
  
  // 외부 이벤트 목록의 인덱스에 따라 색상을 할당하는 함수
  const getColorByIndex = (index) => {
    const colors = ["#f1a8bc", "#eee58a", "#c4ecb0", "#addbd8", "#d6b0eb"];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  const mergedEvents = [...INITIAL_EVENTS, ...events];

  const handleResize = (eventInfo)=>{
    const updatedEvents = events.map((event) => {
      console.log("ok");
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

  return (
    <div className="calendar-app">
      <div className="calendar-app-main">
        <div id="external-events">
          <div style={{ margin: " 0 0 20px" }}>
            <input
              type="submit"
              name="name"
              onClick={addEvent}
              value="이벤트 추가"
            />
          </div>
          {state.externalEvents.map((event) => (
            <div
              className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
              title={event.title}
              data-id={event.id}
              data-color={event.color}
              data-custom={event.custom}
              key={event.id}
              style={{
                backgroundColor: event.color,
                borderColor: event.color,
                cursor: "pointer",
              }}
            >
              <div className="fc-event-main">
                <div>
                  <strong>{event.title}</strong>
                </div>
                {event.custom}
              </div>
              <button onClick={() => handleExternalEventRemove(event.id)}>
                삭제
              </button>
            </div>
          ))}
        </div>
        <div id="calendar-main">
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
            eventReceive={handleReceive}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            droppable={true}
            /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
            events={mergedEvents}
            eventRemove={handleEventRemove}
            eventResize={handleResize}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
