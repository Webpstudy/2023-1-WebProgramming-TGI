import "../../styles/frame.css";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Calendar from "../../pages/Calendar/calendar";
import Subway from "../../pages/Subway/subway";
import Weather from "../../pages/Weather/weather";
import Calculator from "../../pages/Calculator/calculator";
import BurgerImg from "../../assets/icons/menu.svg";
import closeImg from "../../assets/icons/close.svg";
import {BsCalendarCheck,BsCalculator} from 'react-icons/bs';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {FaSubway} from 'react-icons/fa';


function Frame() {
  const load = () => {
    const visible = document.querySelector(".project-menu");
    const isDisplayed = visible.style.display !== "none";

    gsap.to(".calendar-app, .subwayOutLine, .weather, .bigContainer", 0.4, {
      opacity: isDisplayed ? 1 : 0.2,
    });

    gsap.to(visible, 0.4, {
      opacity: isDisplayed ? 0 : 1,
      display: isDisplayed ? "none" : "block",
    });
  };

  const cl = () => {
    const invisible = document.querySelector(".project-menu");
    const isInvisible = invisible.style.display === "none";

    gsap.to(".calendar-app, .subwayOutLine, .weather, .bigContainer", 0.4, {
      opacity: isInvisible ? 0.2 : 1,
    });

    gsap.to(invisible, 0.4, {
      opacity: isInvisible ? 1 : 0,
      display: isInvisible ? "block" : "none",
    });
  };

  const [headerClass, setHeaderClass] = useState("");
  const [headerContent, setHeaderContent] = useState("header__contents");
  const [pageNames, setPageNames] = useState({
    page: "학사 일정",
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > window.innerHeight * 0.08) {
      setHeaderClass("height");
      setHeaderContent("hdCharacter");
    } else {
      setHeaderClass("");
      setHeaderContent("header__contents");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const HandleIcon = ({status})=>{
    if(status==="학사 일정"){
      return(<BsCalendarCheck/> );
    }
    else if(status==="날씨"){
      return(<TiWeatherPartlySunny/> );
    }
    else if(status==="지하철"){
      return(<FaSubway/> );
    }
    else if(status==="학점 계산기"){
      return(<BsCalculator/> );
    }
  }

  return (
    <div className="Main">
      <header className={headerClass}>
        <div className="btnOutline">
          <div id="menuBtn" onClick={load}>
            <img className="hamburger" src={BurgerImg} alt="burger" />
          </div>
        </div>
        <div className={headerContent}>
          <div className="header__contents__detail"><HandleIcon status={pageNames.page}/>&nbsp;{pageNames.page}</div>
        </div>
      </header>

      <menu className="project-menu">
        <div className="menu__contents">
          <div className="menuBtn__outline">
            <div
              id="menuClBtn"
              className="material-symbols-outlined"
              onClick={cl}
            >
              <img className="close" src={closeImg} alt="close" />
            </div>
          </div>
          <ul className="menu__ul">
            <h1 className="menu">프로젝트 메뉴</h1>
            <li className="menu__li">
              <Link
                to="./calendar"
                onClick={() =>
                  setPageNames({ ...pageNames, page: "학사 일정"})
                }
              >
                <BsCalendarCheck/>&nbsp;학사일정
              </Link>
            </li>
            <li className="menu__li">
              <Link
                to="./weather"
                onClick={() => setPageNames({ ...pageNames, page: "날씨" })}
              >
                <TiWeatherPartlySunny/>&nbsp;날씨
              </Link>
            </li>
            <li className="menu__li">
              <Link
                to="./subway"
                onClick={() => setPageNames({ ...pageNames, page: "지하철" })}
              >
                <FaSubway/>&nbsp;지하철
              </Link>
            </li>
            <li className="menu__li">
              <Link
                to="./calculator"
                onClick={() =>
                  setPageNames({
                    ...pageNames,
                    page: "학점 계산기",
                  })
                }
              >
                <BsCalculator/>&nbsp;학점계산기
              </Link>
            </li>
          </ul>
        </div>
      </menu>
      <main>
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/subway" element={<Subway />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="inner">
          <div className="useAPI">
            <p className="title">API</p>
            <div className="useAPI__detail">
              <a href="https://openweathermap.org/api">날씨 </a>
              &nbsp;&nbsp;
              <a href="https://data.seoul.go.kr/dataList/OA-12764/F/1/datasetView.do">
                지하철
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/fullcalendar/fullcalendar">캘린더</a>
            </div>
          </div>
          <div className="GitHub">
            <div className="title">팀 깃허브 주소</div>

            <a href="https://github.com/Webpstudy/2023-1-WebProgramming-TGI">
              https://github.com/Webpstudy/2023-1-WebProgramming-TGI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Frame;
