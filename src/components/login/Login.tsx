import { useState } from 'react';
import styled from 'styled-components';
import {
  AutoLoginBox,
  AutoLoginChecked,
  GoogleLogin,
  KakaoLogin,
} from '../../styles/assets/svg/login';

const Login = () => {
  const [autoLogin, setAutoLogin] = useState(false);
  return (
    <Wrap>
      <LoginTitleWrap>
        <span>
          안녕하세요
          <br />
          <span>티끌</span>
          입니다.
          <br />
        </span>
        <span>서비스 이용을 위해 로그인해 주세요.</span>
      </LoginTitleWrap>

      <LoginTextBox>
        <li>
          <input placeholder='아이디' />
        </li>
        <li>
          <input placeholder='비밀번호' />
        </li>
        <li>
          <span
            onClick={() => {
              {
                autoLogin ? setAutoLogin(false) : setAutoLogin(true);
              }
            }}>
            {autoLogin ? <AutoLoginChecked /> : <AutoLoginBox />}
          </span>
          <span>로그인 상태 유지</span>
        </li>
      </LoginTextBox>
      <LoginButton>
        <button>로그인 하기</button>
      </LoginButton>
      <SubManuBox>
        <span style={{ marginRight: '15px' }}>회원가입</span>
        <span>아이디</span>・<span>비밀번호 찾기</span>
      </SubManuBox>
      <SocialLoginBox>
        <div>
          <KakaoLogin />
          <span>
            카카오로
            <br /> 시작하기
          </span>
        </div>
        <div>
          <GoogleLogin />
          <span>
            구글로
            <br />
            시작하기
          </span>
        </div>
      </SocialLoginBox>
    </Wrap>
  );
};

export default Login;
const Wrap = styled.div`
  margin: 0 30px;
`;
const LoginTitleWrap = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span:first-child {
    font-size: 1.75rem;
    span {
      font-size: 2rem;
      color: ${(props) => props.theme.mainMintColor};
      font-family: 'SEBANG_Gothic_Regular';
      font-weight: 700;
      line-height: 200%;
    }
  }
  span:last-child {
    font-size: 1rem;
    color: #999999;
  }
`;

const LoginTextBox = styled.ul`
  height: 180px;

  li {
    height: 60px;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 95%;
      font-size: 1.2rem;
      border: none;
      border-bottom: 1px solid #dddddd;
      outline: none;
    }

    span {
      margin-right: 5px;
    }
  }
`;

const LoginButton = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 30px;
    background-color: #999999;
    color: white;
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
  }
`;

const SubManuBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 0.875rem;
    color: #999999;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SocialLoginBox = styled.div`
  max-height: 260px;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  div {
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      text-align: center;
    }
  }
`;
