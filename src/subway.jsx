import React, { useEffect, useState } from "react";
import DonggukUniv from "./DonggukUniv";
import styled from "styled-components";
import ChungMuRo4 from "./Chungmuro4";
import ChungMuRo3 from "./Chungmuro3";
import Refresh from "./refresh";
import Line3 from "./line3Btn";
import Line4 from "./line4Btn";
import "./subway.css";

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  border: 1px solid #ccc;
  margin-left: 5vw;
  position: absolute;
  margin-top: 17vh;
  top: 5px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`;

const SubwayInfoContainer = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  margin-left: 2vw;
  width: 39vw;
  background-color: ${(props) => props.styledprops?.bgColor || "#fff"};
  border-left: ${(props) => props.styledprops?.borderLeft || "red"};
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
  width: 40vw;
  align-items: center;
  margin-bottom: 4px;
  color: ${(props) =>
    props.styledprops ? props.styledprops.color : "inherit"};
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

const SubwayInfo = ({ line, lineId, direction, styledprops }) => {
  const [realTimeInfo, setRealTimeInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  //`http://swopenapi.seoul.go.kr/api/subway/47666556736c797336314d79756545/json/realtimeStationArrival/1/5/${line}`
  useEffect(() => {
    const fetchRealTimeInfo = async () => {
      try {
        const response = await fetch(
          `http://swopenapi.seoul.go.kr/api/subway/614d6c646e6c79733132357354714d50/json/realtimeStationArrival/1/5/${line}`
        );
        const data = await response.json();

        console.log(data);
        data.realtimeArrivalList.sort((a, b) => a.barvlDt - b.barvlDt);
        setRealTimeInfo(data.realtimeArrivalList);
        setLoading(false);
      } catch (error) {}
    };

    fetchRealTimeInfo();
  }, [line]);

  if (loading) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <SubwayInfoContainer styledprops={styledprops}>
      <LineTitle>
        {line}역 {parseInt(lineId, 10) - 1000}호선
      </LineTitle>
      <InfoList>
        {realTimeInfo.map((info) => {
          if (info.subwayId === lineId && info.updnLine === direction) {
            if (info.barvlDt <= 60) {
              styledprops = {
                color: "red",
              };
            } else {
              styledprops = {
                color: "black",
              };
            }
            return (
              <InfoItem styledprops={styledprops} key={info.btrainNo}>
                <StationName>
                  {parseInt(info.subwayId, 10) - 1000}호선
                </StationName>
                <StationName>{info.trainLineNm}</StationName>
                <ArrivalTime>{info.arvlMsg2}</ArrivalTime>
              </InfoItem>
            );
          }
        })}
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
        <DonggukUniv />
        <div className="abc">
          <SubwayInfo line="동대입구" lineId="1003" direction="상행" />
          <SubwayInfo
            line="동대입구"
            lineId="1003"
            direction="하행"
            styledprops={{
              borderLeft: "1px dotted grey",
            }}
          />
        </div>

        <br />
        <ChungMuRo3 />
        <div className="abc">
          <SubwayInfo line="충무로" lineId="1003" direction="상행" />
          <SubwayInfo
            line="충무로"
            lineId="1003"
            direction="하행"
            styledprops={{
              borderLeft: "1px dotted grey",
            }}
          />
        </div>
        <br />
        <ChungMuRo4 />
        <div className="abc">
          <SubwayInfo line="충무로" lineId="1004" direction="상행" />
          <SubwayInfo
            line="충무로"
            lineId="1004"
            direction="하행"
            styledprops={{
              borderLeft: "1px dotted grey",
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Subway;
