import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate();

  const toMainPage = (event) => {
    event.preventDefault(); // 기본 동작 막기
    navigate('/');
  }

  return (
    <div className='error-page__contaier' style={{fontSize: "30px"}}>
      <h1 className='error__title'>해당 페이지를 찾지 못했습니다.</h1>
      <p className='error__msg'>주소가 잘못되었거나 더 이상 제공하지 않는 페이지입니다.</p>
      <p className='main_link' onClick={toMainPage}>메인 페이지로 이동</p>
      
    </div>
  )
}
