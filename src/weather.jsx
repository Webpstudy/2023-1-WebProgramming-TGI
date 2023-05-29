import './weather.css';
import React,{useEffect,useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  border: 1px solid #ccc;
  margin-left: 5vw;
  position: absolute;
  margin-top: 17vh;
  top: 5px;
  background-color:#ccc;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`;

const Temp = styled.div`
  font-weight: bold;
  font-size: 100px;
`;

function getAirQualityStatus(value, type) {
  if (type === 'pm10') { // 미세먼지 (PM10)
    if (value <= 30) {
      return '좋음';
    } else if (value <= 80) {
      return '보통';
    } else if (value <= 150) {
      return '나쁨';
    } else {
      return '매우 나쁨';
    }
  } else if (type === 'pm2.5') { // 초미세먼지 (PM2.5)
    if (value <= 15) {
      return '좋음';
    } else if (value <= 35) {
      return '보통';
    } else if (value <= 75) {
      return '나쁨';
    } else {
      return '매우 나쁨';
    }
  } else if (type === 'ozone') { // 오존 (Ozone)
    if (value <= 0.03) {
      return '좋음';
    } else if (value <= 0.09) {
      return '보통';
    } else if (value <= 0.15) {
      return '나쁨';
    } else {
      return '매우 나쁨';
    }
  } else {
    return '알 수 없음';
  }
}


function getWindDirection(deg) {
  if (deg >= 337.5 || deg < 22.5) {
    return '북풍';
  } else if (deg >= 22.5 && deg < 67.5) {
    return '북동풍';
  } else if (deg >= 67.5 && deg < 112.5) {
    return '동풍';
  } else if (deg >= 112.5 && deg < 157.5) {
    return '남동풍';
  } else if (deg >= 157.5 && deg < 202.5) {
    return '남풍';
  } else if (deg >= 202.5 && deg < 247.5) {
    return '남서풍';
  } else if (deg >= 247.5 && deg < 292.5) {
    return '서풍';
  } else if (deg >= 292.5 && deg < 337.5) {
    return '북서풍';
  } else {
    return '알 수 없음';
  }
}
const MiseInfo =()=>{
  const [mise,setMise] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchMiseInfo = async ()=>{
      try{
        const response = await fetch(
          'http://openAPI.seoul.go.kr:8088/464b57726a4b7a6f313037476f544468/json/RealtimeCityAir/1/5/도심권/중구'
        );
        const data = await response.json();
        console.log(data);
        setMise(data);
        setLoading(false);
      } catch (error){
        
      }
    };

    
    fetchMiseInfo();
  },[]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="misemain">
      <div id="mise">
        <div id="miseinfo">{mise.RealtimeCityAir.row[0].PM25}</div>
        <div id="miseinfo">초미세먼지(PM2.5)</div>
        <div id="miseinfo">{getAirQualityStatus(mise.RealtimeCityAir.row[0].PM25,"pm2.5")}</div>
      </div>
      <div id="mise">
        <div id="miseinfo">{mise.RealtimeCityAir.row[0].PM10}</div>
        <div id="miseinfo">미세먼지(PM10)</div>
        <div id="miseinfo">{getAirQualityStatus(mise.RealtimeCityAir.row[0].PM25,"pm10")}</div>
      </div>
      <div id="mise">
        <div id="miseinfo">{mise.RealtimeCityAir.row[0].O3}</div>
        <div id="miseinfo">오존(O3)</div>
        <div id="miseinfo">{getAirQualityStatus(mise.RealtimeCityAir.row[0].PM25,"ozone")}</div>
      </div>
    </div>
  )

}
const WeatherInfo = () =>{
  const [weather,setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchWeatherInfo = async ()=>{
      try{
        const response = await fetch(
          'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=afd96d47386b34f8b44d38a35df06d7a'
        );
        const data = await response.json();
        console.log(data);
        setWeather(data);
        setLoading(false);
      } catch (error){
        
      }
    };
    
    fetchWeatherInfo();
  },[]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="main">
      <div id="temp">
        <img src={"http://openweathermap.org/img/wn/"+ weather.weather[0].icon+ "@4x.png"}></img>
        <Temp>{weather.main.temp+"℃"}</Temp>
      </div>
      <div id="subtemp">
        <p>습도:{weather.main.humidity+"%"}</p>
        <p>바람:{getWindDirection(weather.wind.deg)+weather.wind.speed+"m/s"}</p>
        <p>최저기온:{weather.main.temp_min+"℃"}</p>
        <p>최고기온:{weather.main.temp_max+"℃"}</p>
      </div>
    </div>
  );

}


function Weather() {
  return (
    <Container>
      <div className="subwayOutLine">
        <Title>서울시 중구 동국대학교 날씨현황</Title>
        <WeatherInfo/>
        <Title>대기현황</Title>
        <MiseInfo/>
      </div>
    </Container>
    
  );
}


export default Weather;
