import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { styled } from 'styled-components';

const DonutChart = ({ status, text }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current.chartInstance;
    if (chartInstance) {
      chartInstance.destroy(); // 기존 차트 인스턴스가 있을 경우 파괴
    }
  }, []);

  const data = {
    labels: ['Red', 'Green'],
    datasets: [
      {
        data: [100, 10],
        backgroundColor: ['#FF6384', '#63ff97'],
        hoverBackgroundColor: ['#FF6384', '#63ff97'],
      },
    ],
  };

  if (status === '좋음') {
    data.datasets[0].data = [10, 100];
  } else if (status === '보통') {
    data.datasets[0].data = [35, 100];
  } else if (status === '나쁨') {
    data.datasets[0].data = [10, 10];
  } else if (status === '매우나쁨') {
    data.datasets[0].data = [100, 35];
  }

  const options = {
    plugins: {
      legend: {
        display: false, // 범례 숨김
      },
      interaction: {
        mode: 'none', // 상호작용 비활성화
      },
      tooltip: {
        enabled: false, // 호버 효과 비활성화
      },
    },
    cutout: '85%', // 도넛 차트 중앙 구멍 크기 조정
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '15vh', height: '15vh' }}>
        <Doughnut data={data} options={options} ref={chartRef} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <div id="charttext">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
