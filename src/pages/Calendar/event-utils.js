
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
export const initialIds = [];
export const INITIAL_EVENTS = [ //기간은 +1해야함
  {
    id: createEventId(),
    title: '개교기념일',
    start: "2023-05-08" ,
    backgroundColor : '#ffa970',
    borderColor : '#ffa970',
    editable: false,
  },
  {
    id: createEventId(),
    title: 'wise캠퍼스 정규학기 학점교류 신청',
    start: "2023-05-02",
    end: '2023-05-04',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '재입학 신청',
    start: "2023-05-15",
    end: '2023-05-27',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '여름학기 계절학기 수강신청',
    start: "2023-05-17",
    end: '2023-05-20',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '학기 3/4 기준일',
    start: "2023-05-18",
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '2023년 가을 졸업대상자 졸업논문 제출',
    start: "2023-05-22",
    end: '2023-06-10',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '부처님 오신날',
    start: "2023-05-27",
    backgroundColor : '#ffa970',
    borderColor: '#ffa970',
    editable: false,
  }
  ,
  {
    id: createEventId(),
    title: '전과,연계전공,졸업연기 신청',
    start: "2023-06-01",
    end: '2023-06-08',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '복수∙연계∙융합전공신청, 나노∙마이크로디그리 신청',
    start: "2023-06-01",
    end: '2023-06-24',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '취득교과목 학점포기 신청',
    start: "2023-06-07",
    end: '2023-06-10',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '2학기 교내장학신청',
    start: "2023-06-07",
    end: '2023-06-24',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '기말시험',
    start: "2023-06-08",
    end: '2023-06-15',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '종강',
    start: "2023-06-14",
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '성적처리',
    start: "2023-06-22",
    end: '2023-06-27',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
  {
    id: createEventId(),
    title: '여름방학',
    start: "2023-06-22",
    end: '2023-09-01',
    backgroundColor : '#7978c6',
    borderColor : '#7978c6',
    editable: false,
  },
]

export function createEventId() { //초기 이벤트 아이디 생성
  initialIds.push(eventGuid);
  return String(eventGuid++)
}

export function createEventId2(){ //일반 이벤트 아이디 생성
  return String(Date.now())
}