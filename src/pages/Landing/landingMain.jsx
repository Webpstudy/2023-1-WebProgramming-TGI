import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "../../styles/landing.css";

const LdIntroduce = styled.div`
  z-index: 3;
  font-size: 5vw;
  top: 30vh;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  width: 80%;
  height: 30vh;
  display: flex;
  align-items: center;
  padding-left: 2vw;
`;
const LandingMain = () => {
  return (
    <div className="introduceDiv">
      <LdIntroduce>
        WebpTGI 팀의 <br />
        프로젝트 페이지 입니다!
      </LdIntroduce>
    </div>
  );
};

export default LandingMain;
