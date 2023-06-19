import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "../../styles/landing.css";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const LdIntroduce = styled.div`
<<<<<<< HEAD
  z-index: 3;
  font-size: 5vw;
  top: 25vh;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  width: 80%;
  height: 40vh;
  display: flex;
  align-items: center;
  padding-left: 2vw;
=======
position:relative;
z-index: 1;
font-size: 5vh;
top: 15vh;
color: #fff;
background-color: rgba(0, 0, 0, 0.7);
width: 100%;
height: 40vh;
display: flex;
align-items: center;
padding-left: 2vw;
text-align: center;
flex-direction: row;
>>>>>>> 2203bafaad9768dc824761cd92689937ac2f9c60
`;
const LandingMain = () => {
  return (
    <div className="introduceDiv">
      <LdIntroduce>
<<<<<<< HEAD
        WebpTGI 팀의 <br />
        프로젝트 페이지 <br />
        입니다!
=======
      <div id="sbutton">
          동국대학교 학생들을 위한 서비스<br/>
            <div id="sub">
            캘린더∙날씨∙지하철∙학점계산기
            </div>       
          <Link to="frame/calendar">
            <Button style={{width: '20vw', height: '80px',margin:'5px' }} variant="contained" size="large">
            <h1>바로 시작하기 &gt;</h1>
            </Button>
          </Link> 
          
      </div>
>>>>>>> 2203bafaad9768dc824761cd92689937ac2f9c60
      </LdIntroduce>
    </div>
  );
};

export default LandingMain;
