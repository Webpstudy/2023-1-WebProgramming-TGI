import React from 'react';
import { Bar } from 'react-chartjs-2';

function GradeChart({ grades }) {
  // 학점 데이터를 기반으로 막대 그래프에 필요한 데이터 구성 
  const data = {
    labels: grades.map((grade) => grade.subject),
    datasets: [
      {
        label: '성적',
        data: grades.map((grade) => calculateGradePoint(grade.grade)), // 학점 데이터로 막대 그래프 데이터 생성
        backgroundColor: 'rgba(241,107,111, 0.5)', // 막대 그래프 색상 설정
        borderColor: 'rgba(241,107,111, 1)', // s막대 그래프 테두리 색상 설정
        borderWidth: 1.5, // 막대 그래프 테두리 두께 설정
      },
    ],
    
  };

  // 학점에 따른 학점을 매핑하여 반환하는 함수 (설정에 맞게 수정 필요)
  function calculateGradePoint(grade) {
    switch (grade) {
        case 'A+':
          return 4.5;
        case 'A':
          return 4.0;
        case 'B+':
          return 3.5;
        case 'B':
          return 3.0;
        case 'C+':
          return 2.5;
        case 'C':
          return 2.0;
        case 'D+':
          return 1.5;
        case 'D':
          return 1.0;
        case 'F':
          return 0;
        default:
          return 0;
      }
  }
  // 학점에 따라 이모티콘을 반환하는 함수
 // 학점에 따라 이모티콘을 반환하는 함수
function getEmojiIcon(gradePoint) {
  if (gradePoint >= 4.5) {
    return '😄'; // 활짝 웃는 표정
  } else if (gradePoint >= 4.0) {
    return '🙂'; // 조금 웃는 표정
  } else if (gradePoint >= 3.0) {
    return '😐'; // 무표정
  } else if (gradePoint >= 2.0) {
    return '😢'; // 우는 표정
  } else {
    return '😡'; // 화난 표정
  }
}

  // 막대 그래프에 이모티콘을 추가한 옵션 설정
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5, // 성적 점수의 최대값에 맞게 설정 (예: 5점 만점)
        ticks: {
          stepSize: 1, // 성적 점수의 간격에 맞게 설정 (예: 1단위로)
          callback: (value) => value + getEmojiIcon(value), // 성적 점수 뒤에 이모티콘 추가
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 숨김
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const gradePoint = context.parsed.y;
            const emojiIcon = getEmojiIcon(gradePoint); // 성적 점수에 따른 이모티콘 가져오기
            return `${context.parsed.y} ${emojiIcon}`; // 성적 점수 뒤에 이모티콘 추가
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default GradeChart;
