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

  return <Bar data={data} />;
}

export default GradeChart;
