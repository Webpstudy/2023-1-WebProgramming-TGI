import { Link, useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <Link to="/">홈으로</Link>
      <Link to="/about">소개</Link>
    </div>
  );
};

export default Test;
