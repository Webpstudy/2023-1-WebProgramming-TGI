import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import backgroundImage from './assets/image/404page.png'; // 이미지 파일 경로를 적절히 수정하세요

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="home-link">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;


