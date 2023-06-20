import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import '../../styles/landing.css';
import donggukImg from '../../assets/image/donggukImg.png';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Frame from '../../components/Frame/frame';
import Report from '../../assets/report/TGI.pdf';
import { Outlet } from 'react-router-dom';

const Header = styled.div`
  position: fixed;
  left: 0vh;
  top: 0px;
  width: 100%;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  font-size: 3vh;
  background-color: #fafbfc;
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
`;
const LdIntroduce = styled.div`
  z-index: 3;
  font-size: 5vw;
  position: absolute;
  top: 30vh;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  width: 80%;
  height: 30vh;
  display: flex;
  align-items: center;
  padding-left: 2vw;
`;

export const Landing = () => {
  const [headerClass, setHeaderClass] = useState('hdMenu');

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > window.innerHeight * 0.08) {
      setHeaderClass('scrolledHdMenu');
    } else {
      setHeaderClass('hdMenu');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${donggukImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header>
        <div className={headerClass}>
          <div id="webpTGI">
            <h1>
              <Link to="./">WebpTGI</Link>
            </h1>
          </div>
          <div className="ldHdContents">
            <div className="ldHdContentsDetail">
              <Link to="./frame/calendar">Project</Link>
            </div>
            <div className="ldHdContentsDetail">
              <a href={Report} download={Report}>
                Project Report
              </a>
            </div>
            <div className="ldHdContentsDetail">
              <div className="ldHdContentsDetail">
                <Link to="./aboutUs">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <main>
        <Routes>
          <Route path="/frame" element={<Frame />} />
        </Routes>
      </main>

      <div id="detail" style={{ height: '120vh' }}>
        <Outlet />
      </div>
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
};
