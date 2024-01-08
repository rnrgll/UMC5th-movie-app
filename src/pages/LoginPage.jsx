import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginFailure, loginSuccess } from '../actions/userActions';
import axios from 'axios';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('확인');

  const dispatch = useDispatch();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    setLoading(true);
    setLoadingText('Loading...');

    // Redux 액션 디스패치
    dispatch(loginRequest({ id: id, pw: password }));

    try {
      const response = await axios.post('http://localhost:8000/user/login', { id: id, pw: password });

      console.log('서버 응답:', response.data);
      const userInfo = response.data.userInfo;

      // 로그인 성공 시 추가 작업 수행
      dispatch(loginSuccess(userInfo));
      alert('로그인 성공!');
    } catch (error) {
      // 로그인 실패 시 추가 작업 수행
      dispatch(loginFailure(error));
      if (error.response) {
        // 서버 응답 있는 경우
        const statusCode = error.response.data.code;
        switch (statusCode) {
            case "SIGNIN400":
                alert('로그인 실패: body 값이 비어 있습니다.');
                break;
            case "SIGNIN4001":
                alert(`로그인 실패: ${statusCode} ${error.response.data.message}`);
                break;
            case "SIGNIN4003":
                alert(`로그인 실패 ${statusCode}: ${error.response.data.message}`);
                break;
            case "SIGNIN4002":
                alert(`로그인 실패: ${statusCode} ${error.response.data.message}`);
                break;
            default:
                alert('로그인 실패: 알 수 없는 오류가 발생했습니다.');
                break;
        }
      } else {
        // 서버 응답 없는 경우
        alert('서버와 통신 중 오류가 발생했습니다.');
      }
    }
  };




  useEffect(() => {
    if(loading) {
        // 1.5초 후에 로딩 텍스트 초기화
    const timer = setTimeout(() => {
        setLoading(false);
        setLoadingText('확인');
  
      }, 1500);
      return () => clearTimeout(timer);
    }
    // 타이머 클리어 함수를 반환하여 컴포넌트가 언마운트될 때 타이머가 정리될 수 있도록 함
    
  }, [loadingText]); // loadingText가 변경될 때마다 useEffect가 실행되도록 함


  return (
    <div className="login-main">
      <h2 className="login-title">아이디와 비밀번호를 입력해주세요</h2>
      <form action="">
        <div className="login-form--section">
          <label className="login-label">아이디</label>
          <input className="login-input" type="text" value={id} onChange={handleIdChange} />
        </div>
        <div className="login-form--section">
          <label className="login-label">비밀번호</label>
          <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="login-submit" disabled={loading} onClick={handleSubmit}>
          {loadingText}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
