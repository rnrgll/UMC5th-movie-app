import React, { useState } from 'react'

const LoginPage = () => {
    //상태 초기화
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');


    //이메일 유효성 검사 함수
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    //이메일 에러
    const handleEmailError = (email) => {
        if(!validateEmail(email)){
            setEmailError('올바른 이메일 주소를 입력하세요.')
        }
        else {
            setEmailError('');
        }
    }

    
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        handleEmailError(email);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const isFormValid = () => {
        return validateEmail(email) && password.length > 0;
    }


    return (
        <div className='login-main'>
            <h2 className='login-title'>이메일과 비밀번호를 입력해주세요</h2>
            <form action="">
                <div className='login-form--section'>
                    <label className='login-label'>이메일 주소</label>
                    <input className='login-input' type="email" value={email} onChange={handleEmailChange} />
                    <p style={{color: 'red', fontSize: '15px'}}>{emailError}</p> 
                </div>
                <div className="login-form--section">
                <label className='login-label'>비밀번호</label>
                <input className='login-input' type="password" value={password} onChange={handlePasswordChange} />
                </div>
                  <button className='login-submit' disabled={!isFormValid()}>확인</button>
            </form>
        </div>
        
    )
};


export default LoginPage;