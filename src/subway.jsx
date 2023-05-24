import React, { useEffect, useState } from 'react';
import DonggukUniv from './DonggukUniv';
import styled from 'styled-components';
import ChungMuRo4 from './Chungmuro4';
import ChungMuRo3 from './Chungmuro3';
import Refresh from './refresh';
import Line3 from './line3Btn';
import Line4 from './line4Btn';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  margin-left: 2vw;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`;

const SubwayInfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

const LineTitle = styled.h2`
  color: #333;
  margin-bottom: 8px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const StationName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const ArrivalTime = styled.span`
  color: #888;
`;

const LoadingText = styled.div`
  color: #888;
  text-align: center;
`;

const SubwayInfo = ({ line }) => {
  const [realTimeInfo, setRealTimeInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  //`http://swopenapi.seoul.go.kr/api/subway/47666556736c797336314d79756545/json/realtimeStationArrival/1/5/${line}`
  useEffect(() => {
    const fetchRealTimeInfo = async () => {
      try {
        const response = await fetch(
          `http://swopenapi.seoul.go.kr/api/subway/47666556736c797336314d79756545/json/realtimeStationArrival/1/5/${line}`
        );
        const data = await response.json();

        console.log(data);

        setRealTimeInfo(data.realtimeArrivalList);
        //setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRealTimeInfo();
  }, [line]);

  if (loading) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <SubwayInfoContainer>
      <LineTitle>{line}역</LineTitle>
      <InfoList>
        {realTimeInfo.map((info) => (
          <InfoItem>
            <StationName>{info.subwayId}</StationName>
            <StationName>{info.trainLineNm}</StationName>
            <ArrivalTime>{info.arvlMsg2}</ArrivalTime>
          </InfoItem>
        ))}
      </InfoList>
    </SubwayInfoContainer>
  );
};

const Subway = () => {
  return (
    <Container>
      <div className="outLine">
        <Title>Subway Real-time Info</Title>

        <Line4 />
        <Line3 />
        <Refresh />
        <SubwayInfo line="동대입구" />
        <DonggukUniv />
        <br />
        <SubwayInfo line="충무로 3" />
        <ChungMuRo3 />
        <br />
        <SubwayInfo line="충무로 4" />
        <ChungMuRo4 />
      </div>
    </Container>
  );
};

export default Subway;
