import React from "react";
import "../../styles/aboutus.css"; // 스타일 파일을 import합니다.

function TeamMember(props) {
  return (
    <div className="team-member">
      <h3 className="member-name">{props.name}</h3>
      <p className="member-role">학과: {props.role}</p>
      <p className="member-intro">소개: {props.intro}</p>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="team-page">
      <h2 className="page-title">팀원 소개</h2>
      <div className="team-grid">
        <TeamMember
          name="권좌영"
          role="(팀원의 학과)"
          intro="(팀원에 대한 간단한 소개 문구)"
        />
        <TeamMember
          name="이용호"
          role="(팀원의 학과)"
          intro="(팀원에 대한 간단한 소개 문구)"
        />
        <TeamMember
          name="이윤서"
          role="통계학과"
          intro="(팀원에 대한 간단한 소개 문구)"
        />
        <TeamMember
          name="이태희"
          role="(팀원의 학과)"
          intro="(팀원에 대한 간단한 소개 문구)"
        />
      </div>
    </div>
  );
}

export default AboutUs;
