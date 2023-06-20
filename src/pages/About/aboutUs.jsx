import React from "react";
import "../../styles/aboutus.css"; // 스타일 파일을 import합니다.
import propile1 from "../../assets/image/이태희.jpg";
import propile3 from "../../assets/image/이윤서.jpg";
import propile2 from "../../assets/image/권좌영.jpg";

function TeamMember(props) {
  return (
    <div className="team-member">
      <div className="box">
        <img src={props.img} className="member-img"></img>
      </div>
      <h3 className="member-name">{props.name}</h3>
      <p className="member-role">학과: {props.role}</p>
      <p className="member-intro">소개: {props.intro}</p>
      <p className="member-intro">이메일: {props.email}</p>
      <p className="member-intro">Github: {props.github}</p>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="team-page">
      <h2 className="page-title">팀원 소개</h2>
      <div className="team-grid">
        <TeamMember
          img={propile2}
          name="권좌영"
          role="멀티미디어공학과"
          intro="2016112623"
          email="kzoyoung@naver.com"
          github="https://github.com/Kzoyoung"
        />
        <TeamMember
          img={propile1}
          name="이용호"
          role="전자전기공학부"
          intro="2018112437"
          email="chrisyongho@gmail.com"
          github="https://github.com/2dydgh"
        />
        <TeamMember
          img={propile3}
          name="이윤서"
          role="통계학과"
          intro="2020110483"
          email="yoonseo3269@naver.com"
          github="https://github.com/lys3269"
        />
        <TeamMember
          img={propile1}
          name="이태희"
          role="국제통상학전공"
          intro="2016111076	"
          email="pyung1591@gmail.com"
          github="https://github.com/Impyung"
        />
      </div>
    </div>
  );
}

export default AboutUs;
