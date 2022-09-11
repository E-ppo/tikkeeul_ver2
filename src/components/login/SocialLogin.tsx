import { useState } from 'react';
import styled from 'styled-components';

import {
  KakaoLogin,
  GoogleLogin,
  Duplicate,
} from '../../styles/assets/svg/login';

interface IPropsData {
  socialType?: string;
  // 컴포넌트 연결하면 리콰이어로 변경하기
}
const SocialLogin = () => {
  const [socialType, setSocialType] = useState('google');
  const [isEmail, setEmail] = useState(false);
  const [isNickName, setNickName] = useState(true);
  return (
    <>
      <Wrap>
        <SocialLoginWrap>
          <span>
            <span>티끌</span>회원가입을 위해 <br />
            정보를 입력해주세요
          </span>
        </SocialLoginWrap>

        <SocialType>
          {socialType === 'google' ? <GoogleLogin /> : <KakaoLogin />}
        </SocialType>

        <InputBox>
          <li>
            <div>
              <input type='text' placeholder='이메일' />
              <Duplicate style={{ cursor: 'pointer' }} />
            </div>
            {isEmail ? (
              <span>등록된 이메일입니다. 다른 이메일로 등록해주세요</span>
            ) : (
              ''
            )}
          </li>
          <li>
            <div>
              <input type='text' placeholder='닉네임' />
              <Duplicate style={{ cursor: 'pointer' }} />
            </div>
            {isNickName ? (
              <span>등록된 닉네임입니다. 다른 닉네임으로 등록해주세요</span>
            ) : (
              ''
            )}
          </li>
        </InputBox>
      </Wrap>
      <JoinButton>가입하기</JoinButton>
    </>
  );
};
export default SocialLogin;

const Wrap = styled.div`
  margin: 0 30px;
`;
const SocialLoginWrap = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  span {
    font-size: 1.75rem;
    span {
      font-size: 2rem;
      font-weight: 700;
      line-height: 150%;
      font-family: 'SEBANG_Gothic_Regular';
      color: ${(props) => props.theme.mainMintColor};
    }
  }
`;
const SocialType = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const InputBox = styled.ul`
  width: 100%;
  height: 160px;

  li {
    height: 80px;

    div {
      display: flex;
      align-items: center;
      height: 50%;
      border-bottom: 1px solid #dddddd;

      input {
        width: 90%;
        height: 90%;
        font-size: 1.2rem;
        border: none;
        outline: none;
        &::placeholder {
          color: #cccccc;
        }
      }
      span {
        margin-right: 5px;
      }
    }

    span {
      padding: 2% 0;
      color: #ff7272;
      font-size: 0.875rem;
    }
  }
`;
const JoinButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 0;

  background-color: ${(props) => props.theme.mainMintColor};
  color: white;
  font-size: 1.125rem;
  font-weight: 700;

  cursor: pointer;
`;
