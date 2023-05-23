import './subway.css';
import React, { useEffect, useState } from 'react';

function Subway() {
  const [subwayInfo, setSubwayInfo] = useState([]);

  useEffect(() => {
    const fetchSubwayInfo = async () => {
      try {
        const response = await fetch(
          "http://swopenapi.seoul.go.kr/api/subway/67744a63444b7a6f3139545649784e/json/realtimeStationArrival/0/10/%EB%8F%99%EB%8C%80%EC%9E%85%EA%B5%AC"
        );
        const data = await response.json();

        setSubwayInfo(data.realtimeArrivalList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubwayInfo();
  }, []);

  return (
    <div>
      {subwayInfo.map((info, index) => (
        <div key={index}>
          <p>열차번호: {info.btrainNo}</p>
          <p>호선: {info.subwayId}</p>
          <p>도착까지 남은 시간(~초후): {info.barvlDt}</p>
          <p>현재 열차 위치: {info.arvlMsg3}</p>
          <p>열차 운행 정보: {info.trainLineNm}</p>
          <p>종착역: {info.bstatnNm}</p>
        </div>
      ))}
    </div>
  );
}

export default Subway;
