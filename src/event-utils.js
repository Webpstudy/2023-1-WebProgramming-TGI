
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [ //기간은 +1해야함
  {
    id: createEventId(),
    title: '개교기념일',
    start: "2023-05-08" ,
    backgroundColor : 'red',
  },
  {
    id: createEventId(),
    title: 'wise캠퍼스 정규학기 학점교류 신청',
    start: "2023-05-02",
    end: '2023-05-04'
  },
  {
    id: createEventId(),
    title: '재입학 신청',
    start: "2023-05-15",
    end: '2023-05-27'
  },
  {
    id: createEventId(),
    title: '여름학기 계절학기 수강신청',
    start: "2023-05-17",
    end: '2023-05-20'
  },
  {
    id: createEventId(),
    title: '학기 3/4 기준일',
    start: "2023-05-18"
  },
  {
    id: createEventId(),
    title: '2023년 가을 졸업대상자 졸업논문 제출',
    start: "2023-05-22",
    end: '2023-06-10'
  },
  {
    id: createEventId(),
    title: '부처님 오신날',
    start: "2023-05-27",
    backgroundColor : 'red',
  }
  
]

export function createEventId() {
  return String(eventGuid++)
}
