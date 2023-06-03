import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import './landing.css';
import donggukImg from './assets/image/donggukImg.png';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Frame from './frame';
import Report from './assets/report/TGI.pdf';

const Header = styled.div`
  position: fixed;
  left: 2vh;
  top: 0px;
  width: 98%;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  font-size: 3vh;
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
    <div>
      <Header>
        <div className={headerClass}>
          <div>
            <h1>WebpTGI</h1>
          </div>
          <div className="ldHdContents">
            <div className="ldHdContentsDetail">
              <Link to="./frame">Project</Link>
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

      <Image src={donggukImg} />
      <div className="introduceDiv">
        <LdIntroduce>
          WebpTGI 팀의 <br />
          프로젝트 페이지 입니다!
        </LdIntroduce>
      </div>
      <footer className="landingFooter">
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
};
