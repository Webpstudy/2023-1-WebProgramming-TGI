import React, { useState, useEffect } from "react";
import "./calculator.css";

function Calculator() {
  const [subject, setSubject] = useState("");
  const [credit, setCredit] = useState(0);
  const [grade, setGrade] = useState("");
  const [isMajor, setIsMajor] = useState(false);
  const [overallGPA, setOverallGPA] = useState(0);
  const [majorGPA, setMajorGPA] = useState(0);
  const [grades, setGrades] = useState(() => {
    const storedGrades = localStorage.getItem("grades");
    return storedGrades ? JSON.parse(storedGrades) : [];
  });
  const deleteGrade = (index) => {
    const updatedGrades = [...grades];
    updatedGrades.splice(index, 1);
    setGrades(updatedGrades);
    localStorage.setItem("grades", JSON.stringify(updatedGrades));
  };

  useEffect(() => {
    const storedGrades = localStorage.getItem("grades");
    if (storedGrades) {
      setGrades(JSON.parse(storedGrades));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("grades", JSON.stringify(grades));
  }, [grades]);

  const addGrade = () => {
    if (subject !== "" && credit > 0 && grade !== "") {
      const newGrade = { subject, credit, grade, isMajor };
      const newGrades = [...grades, newGrade];
      setGrades(newGrades);
      localStorage.setItem("grades", JSON.stringify(newGrades));
    }
  };

  const calculateOverallGPA = () => {
    let totalQualityPoints = 0;
    let totalCredits = 0;
    grades.forEach((grade) => {
      const gradePoint = calculateGradePoint(grade.grade);
      totalQualityPoints += gradePoint;
      totalCredits += 1; // 과목의 개수를 1씩 증가시킴
    });
    const gpa = totalQualityPoints / totalCredits;
    setOverallGPA(gpa.toFixed(2));
  };

  const calculateMajorGPA = () => {
    let totalQualityPoints = 0;
    let majorTotalCredits = 0;
    grades.forEach((grade) => {
      if (grade.isMajor) {
        const gradePoint = calculateGradePoint(grade.grade);
        totalQualityPoints += gradePoint;
        majorTotalCredits += 1; // 전공 과목의 개수를 1씩 증가시킴
      }
    });
    const gpa = totalQualityPoints / majorTotalCredits;
    setMajorGPA(gpa.toFixed(2));
  };

  const calculateGradePoint = (grade) => {
    // 성적에 따른 학점을 매핑하여 반환하는 함수 (설정에 맞게 수정 필요)
    // 예시: A+ -> 4.5, A -> 4.0, ...
    // 필요에 따라 성적과 학점 간의 매핑을 수정하세요.
    switch (grade) {
      case "A+":
        return 4.5;
      case "A":
        return 4.0;
      case "B+":
        return 3.5;
      case "B":
        return 3.0;
      case "C+":
        return 2.5;
      case "C":
        return 2.0;
      case "D+":
        return 1.5;
      case "D":
        return 1.0;
      case "F":
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div className="bigContainer">
      <div className="title_cal">학점계산기</div>
      <div className="smallContainer">
        <div className="firstPart">
          <div className="box">
            <label>과목명:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="box">
            <label>학점:</label>
            <input
              type="number"
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
            />
          </div>
          <div className="box">
            <label>성적:</label>
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
              <option value="">성적 선택</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className="box">
            <label>전공:</label>
            <input
              type="checkbox"
              checked={isMajor}
              onChange={(e) => setIsMajor(e.target.checked)}
            />
          </div>
          <button className="cal_btn" onClick={addGrade}>
            추가
          </button>
        </div>
        <div className="secondPart">
          <div className="result_table">
            <table className="grade-table">
              <thead>
                <tr>
                  <th>과목명</th>
                  <th>학점</th>
                  <th>성적</th>
                  <th>전공 여부</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr key={index}>
                    <td>{grade.subject}</td>
                    <td>{grade.credit}</td>
                    <td>{grade.grade}</td>
                    <td>{grade.isMajor ? "전공" : "비전공"}</td>
                    <td
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        width: "40px",
                      }}
                    >
                      <button
                        onClick={() => deleteGrade(index)}
                        className="delete_btn"
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="thirdPart">
          <div style={{marginTop:"10px"}}>
            <button className="cal_btn" onClick={calculateOverallGPA}>
              전체 평점 계산
            </button>
            <div className="result">
              <label>총평점:</label>
              <input type="number" value={overallGPA} readOnly />
            </div>
          </div>
          <div style={{marginTop:"60px"}}>
            <button className="cal_btn" onClick={calculateMajorGPA}>
              전공 평점 계산
            </button>
            <div className="result">
              <label>전공평점:</label>
              <input type="number" value={majorGPA} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
