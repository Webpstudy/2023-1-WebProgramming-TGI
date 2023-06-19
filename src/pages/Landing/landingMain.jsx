import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "../../styles/landing.css";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const LdIntroduce = styled.div`
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
`;
const LandingMain = () => {
  return (
    <div className="introduceDiv">
      <LdIntroduce>
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
      </LdIntroduce>
    </div>
  );
};

export default LandingMain;
