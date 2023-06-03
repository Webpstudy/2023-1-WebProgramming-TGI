import './frame.css';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calendar from './calendar';
import Subway from './subway';
import Weather from './weather';
import Calculator from './calculator';

function Frame() {
  const load = () => {
    const visible = document.querySelector('.project-menu');
    const isDisplayed = visible.style.display !== 'none';

    gsap.to('.calendar-app, .subwayOutLine, .weather', 0.4, {
      opacity: isDisplayed ? 1 : 0.2,
    });

    gsap.to(visible, 0.4, {
      opacity: isDisplayed ? 0 : 1,
      display: isDisplayed ? 'none' : 'block',
    });
  };

  const cl = () => {
    const invisible = document.querySelector('.project-menu');
    const isInvisible = invisible.style.display === 'none';

    gsap.to('.calendar-app, .subwayOutLine, .weather', 0.4, {
      opacity: isInvisible ? 0.2 : 1,
    });

    gsap.to(invisible, 0.4, {
      opacity: isInvisible ? 1 : 0,
      display: isInvisible ? 'block' : 'none',
    });
  };

  const [headerClass, setHeaderClass] = useState('');
  const [headerContent, setHeaderContent] = useState('header__contents');

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > window.innerHeight * 0.08) {
      setHeaderClass('height');
      setHeaderContent('hdCharacter');
    } else {
      setHeaderClass('');
      setHeaderContent('header__contents');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Main">
      <header className={headerClass}>
        <div className="btnOutline">
          <div id="menuBtn" onClick={load}>
            <img
              className="hamburger"
              src="./src/assets/icons/menu.svg"
              alt="burger"
            />
          </div>
        </div>
        <div className={headerContent}>
          <div className="header__contents__detail">이름자리</div>
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
              <img
                className="close"
                src="./src/assets/icons/close.svg"
                alt="close"
              />
            </div>
          </div>
          <ul className="menu__ul">
            <h1 className="menu">프로젝트 메뉴</h1>
            <li className="menu__li">
              <Link to="./calendar">학사일정</Link>
            </li>
            <li className="menu__li">
              <Link to="./weather">날씨</Link>
            </li>
            <li className="menu__li">
              <Link to="./subway">지하철</Link>
            </li>
            <li className="menu__li">
              <Link to="./calculator">학점계산기</Link>
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
            <p>API</p>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div className="GitHub">
            <p>팀원 깃허브 주소</p>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Frame;
