import "./calculator.css";
// import React from "react";

// function Calculator() {
// const tableBox = document.querySelectorAll(".tableBox");
// //왼쪽 테이블 입력리스트
// for (let i = 0; i < 7; ++i) {
//   const tableRowWrapper = document.createElement("div");
//   tableRowWrapper.className = "tdRow";
//   //과목
//   const subjectInputWrapper = document.createElement("div");
//   subjectInputWrapper.className = "column1";
//   subjectInputWrapper.id = "td";
//   subjectInputWrapper.type = "text";
//   const subjectInput = document.createElement("input");
//   subjectInput.className = "subject";
//   subjectInput.placeholder = "과목명을 입력해주세요";
//   subjectInputWrapper.appendChild(subjectInput);
//   //점수
//   const scoreSelectWrapper = document.createElement("div");
//   scoreSelectWrapper.className = "column2";
//   scoreSelectWrapper.id = "td";
//   const scoreSelect = document.createElement("select");
//   scoreSelect.className = "score";
//   scoreSelect.innerHTML =
//     '<option value="4.5">A+</option><option value="4">A</option><option value="3.5">B+</option><option value="3">B</option><option value="2.5">C+</option><option value="2">C</option><option value="1.5">D+</option><option value="1">D</option><option value="0">F</option>';
//   scoreSelectWrapper.appendChild(scoreSelect);
//   //학점
//   const creditsInputWrapper = document.createElement("div");
//   creditsInputWrapper.className = "column3";
//   creditsInputWrapper.id = "td";
//   const creditsInput = document.createElement("input");
//   creditsInput.type = "number";
//   creditsInput.className = "credit";
//   creditsInputWrapper.appendChild(creditsInput);
//   //전공
//   const majorInputWrapper = document.createElement("div");
//   majorInputWrapper.className = "column4";
//   majorInputWrapper.id = "td";
//   majorInputWrapper.innerHTML = '<input type="checkbox" class="major" />';

//   tableRowWrapper.appendChild(subjectInputWrapper);
//   tableRowWrapper.appendChild(scoreSelectWrapper);
//   tableRowWrapper.appendChild(creditsInputWrapper);
//   tableRowWrapper.appendChild(majorInputWrapper);

//   tableBox[0].appendChild(tableRowWrapper);
// }
// //오른쪽 테이블 입력리스트
// for (let i = 0; i < 7; ++i) {
//   const tableRowWrapper = document.createElement("div");
//   tableRowWrapper.className = "tdRow";
//   //과목
//   const subjectInputWrapper = document.createElement("div");
//   subjectInputWrapper.className = "column1";
//   subjectInputWrapper.id = "td";
//   subjectInputWrapper.type = "text";
//   const subjectInput = document.createElement("input");
//   subjectInput.className = "subject";
//   subjectInput.placeholder = "과목명을 입력해주세요";
//   subjectInputWrapper.appendChild(subjectInput);
//   //점수
//   const scoreSelectWrapper = document.createElement("div");
//   scoreSelectWrapper.className = "column2";
//   scoreSelectWrapper.id = "td";
//   const scoreSelect = document.createElement("select");
//   scoreSelect.className = "score";
//   scoreSelect.innerHTML =
//     '<option value="4.5">A+</option><option value="4">A</option><option value="3.5">B+</option><option value="3">B</option><option value="2.5">C+</option><option value="2">C</option><option value="1.5">D+</option><option value="1">D</option><option value="0">F</option>';
//   scoreSelectWrapper.appendChild(scoreSelect);
//   //학점
//   const creditsInputWrapper = document.createElement("div");
//   creditsInputWrapper.className = "column3";
//   creditsInputWrapper.id = "td";
//   const creditsInput = document.createElement("input");
//   creditsInput.type = "number";
//   creditsInput.className = "credit";
//   creditsInputWrapper.appendChild(creditsInput);
//   //전공
//   const majorInputWrapper = document.createElement("div");
//   majorInputWrapper.className = "column4";
//   majorInputWrapper.id = "td";
//   majorInputWrapper.innerHTML = '<input type="checkbox" class="major" />';

//   tableRowWrapper.appendChild(subjectInputWrapper);
//   tableRowWrapper.appendChild(scoreSelectWrapper);
//   tableRowWrapper.appendChild(creditsInputWrapper);
//   tableRowWrapper.appendChild(majorInputWrapper);

//   tableBox[1].appendChild(tableRowWrapper);
// }

// //결과보기 버튼 클릭 시
// {
//   //소수점 2자리 반올림 하기 위한함수
//   function roundToTwo(num) {
//     return +(Math.round(num + "e+2") + "e-2");
//   }
//   const submitBtn = document.querySelector(".submitButton");
//   submitBtn.addEventListener("click", () => {
//     const subjects = document.querySelectorAll(".subject");
//     const score = document.querySelectorAll(".score");
//     const credits = document.querySelectorAll(".credit");
//     const majors = document.querySelectorAll(".major");
//     // (학점수X교과목점수)의 합계 / 수강신청 총학점수
//     let allValue = 0; //총평점
//     let majorValue = 0; //전공평점
//     let creditCount = 0; //이수학점
//     let majorCount = 0; //전공이수
//     for (let i = 0; i < 14; ++i) {
//       //둘다 입력 되어있지 않은 경우
//       if (!(subjects[i].value && credits[i].value)) {
//         //둘중 하나만 입력 안되어있는 경우
//         if (subjects[i].value || credits[i].value) {
//           alert("과목명 혹은 학점을 전부 입력해 주세요.");
//           return;
//         }
//         continue;
//       }
//       allValue += Number(score[i].value) * Number(credits[i].value);
//       creditCount += Number(credits[i].value);

//       //만약 해당 과목이 전공에 체크한 경우
//       if (majors[i].checked) {
//         majorValue += Number(score[i].value) * Number(credits[i].value);
//         majorCount += Number(credits[i].value);
//       }
//     }
//     allValue = allValue / creditCount;
//     majorValue = majorValue / majorCount;
//     //아무것도 입력안되어있으면 return
//     if (creditCount == 0 && majorCount == 0) {
//       return;
//     }
//     //점수 등록
//     document.querySelector(".allResult").innerHTML = isNaN(allValue)
//       ? 0
//       : roundToTwo(allValue);
//     document.querySelector(".majorResult").innerHTML = isNaN(majorValue)
//       ? 0
//       : roundToTwo(majorValue);
//     document.querySelector(".isuCredit").innerHTML = isNaN(creditCount)
//       ? 0
//       : creditCount;
//     document.querySelector(".majorIsuCredit").innerHTML = isNaN(majorCount)
//       ? 0
//       : majorCount;
//   });
// }
// //초기화 버튼 클릭 시
// {
//   const resetBtn = document.querySelector(".resetButton");
//   resetBtn.addEventListener("click", () => {
//     const subjects = document.querySelectorAll(".subject");
//     const score = document.querySelectorAll(".score");
//     const credits = document.querySelectorAll(".credit");
//     const majors = document.querySelectorAll(".major");
//     for (let i = 0; i < 14; ++i) {
//       subjects[i].value = "";
//       score[i].value = "4.5";
//       credits[i].value = "";
//       majors[i].checked = false;
//     }
//     //점수 등록
//     document.querySelector(".allResult").innerHTML = 0;
//     document.querySelector(".majorResult").innerHTML = 0;
//     document.querySelector(".isuCredit").innerHTML = 0;
//     document.querySelector(".majorIsuCredit").innerHTML = 0;
//   });
// }

//   return (
//     <>
//       <h1>당신의 학점은??</h1>

//       <div className="tableWrapper">
//         <div className="table">
//           <div className="thRow">
//             <div className="column1">과목</div>
//             <div className="column2">점수</div>
//             <div className="column3">학점</div>
//             <div className="column4">전공</div>
//           </div>
//           <div className="tableBox"></div>
//         </div>
//         <hr />
//         <div className="table">
//           <div className="thRow">
//             <div className="column1">과목</div>
//             <div className="column2">점수</div>
//             <div className="column3">학점</div>
//             <div className="column4">전공</div>
//           </div>
//           <div className="tableBox"></div>
//         </div>
//       </div>

//       <div className="middleSection">
//         <div className="middleLeftFont">망했냐??</div>
//         <div className="buttonwrapper">
//           <button className="submitButton">결과보기</button>
//           <button className="resetButton">초기화</button>
//         </div>
//         <div className="middleRightFont">야 우냐??</div>
//       </div>

//       <div className="bottomSection">
//         <div>총평점</div>
//         <div id="result" className="allResult">
//           0
//         </div>
//         <div>전공평점</div>
//         <div id="result" className="majorResult">
//           0
//         </div>
//         <div>이수학점</div>
//         <div id="result" className="isuCredit">
//           0
//         </div>
//         <div>전공이수</div>
//         <div id="result" className="majorIsuCredit">
//           0
//         </div>
//       </div>
//     </>
//   );
// }

// export default Calculator;

import React, { useState } from "react";

const Calculator = () => {
  const [subject, setsubjct] = useState("");

  const [credit, setcredit] = useState("");

  const setsj = (event) => {
    setsubjct(event.target.value);
    // console.log(event.target.value);
  };
  const setcd = (event) => {
    setcredit(event.target.value);
    // console.log(event.target.value);
  };
  const [allValue, setAllValue] = useState(0);
  const [majorValue, setMajorValue] = useState(0);
  const [creditCount, setCreditCount] = useState(0);
  const [majorCount, setMajorCount] = useState(0);

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  };

  const handleSubmit = () => {
    const subjects = document.querySelectorAll(".subject");
    const scores = document.querySelectorAll(".score");
    const credits = document.querySelectorAll(".credit");
    const majors = document.querySelectorAll(".major");

    let allValue = 0;
    let majorValue = 0;
    let creditCount = 0;
    let majorCount = 0;

    for (let i = 0; i < 14; i++) {
      if (!(subjects[i].value && credits[i].value)) {
        if (subjects[i].value || credits[i].value) {
          alert("과목명 혹은 학점을 전부 입력해 주세요.");
          return;
        }
        continue;
      }

      allValue += Number(scores[i].value) * Number(credits[i].value);
      creditCount += Number(credits[i].value);

      if (majors[i].checked) {
        majorValue += Number(scores[i].value) * Number(credits[i].value);
        majorCount += Number(credits[i].value);
      }
    }

    allValue = allValue / creditCount;
    majorValue = majorValue / majorCount;

    if (creditCount === 0 && majorCount === 0) {
      return;
    }

    setAllValue(isNaN(allValue) ? 0 : roundToTwo(allValue));
    setMajorValue(isNaN(majorValue) ? 0 : roundToTwo(majorValue));
    setCreditCount(isNaN(creditCount) ? 0 : creditCount);
    setMajorCount(isNaN(majorCount) ? 0 : majorCount);
  };

  const handleReset = () => {
    const subjects = document.querySelectorAll(".subject");
    const scores = document.querySelectorAll(".score");
    const credits = document.querySelectorAll(".credit");
    const majors = document.querySelectorAll(".major");

    for (let i = 0; i < 14; i++) {
      subjects[i].target.value = "";
      scores[i].target.value = "4.5";
      credits[i].target.value = "";
      majors[i].target.checked = false;
    }

    setAllValue(0);
    setMajorValue(0);
    setCreditCount(0);
    setMajorCount(0);
  };
  return (
    <div>
      <h1>당신의 학점은??</h1>
      <div className="tableWrapper">
        <div className="table">
          <div className="thRow">
            <div className="column1">과목</div>
            <div className="column2">점수</div>
            <div className="column3">학점</div>
            <div className="column4">전공</div>
          </div>
          <div className="tableBox">
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="tdRow" key={index}>
                <div className="column1">
                  <input
                    type="text"
                    className="subject"
                    placeholder="과목명을 입력해주세요"
                    value={subject}
                    onChange={setsj}
                  />
                </div>
                <div className="column2">
                  <select className="score">
                    {" "}
                    <option value="4.5">A+</option>
                    <option value="4">A</option>
                    <option value="3.5">B+</option>
                    <option value="3">B</option>
                    <option value="2.5">C+</option>
                    <option value="2">C</option>
                    <option value="1.5">D+</option>
                    <option value="1">D</option>
                    <option value="0">F</option>
                  </select>
                </div>
                <div className="column3">
                  <input
                    type="number"
                    className="credit"
                    value={credit}
                    onChange={setcd}
                  />
                </div>
                <div className="column4">
                  <input type="checkbox" className="major" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit}>결과보기</button>
        <button onClick={handleReset}>초기화</button>
        <div className="result">
          <p>전공 학점: {majorValue}</p>
          <p>전공 취득 학점: {majorCount}</p>
          <p>전체 평점: {allValue}</p>
          <p>전체 취득 학점: {creditCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
