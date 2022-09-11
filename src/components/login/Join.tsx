import { useState } from 'react';
import styled from 'styled-components';
import {
  AutoLoginChecked,
  AutoLoginBox,
  Duplicate,
} from '../../styles/assets/svg/login';

const Join = () => {
  const [terms1Checked, setTerms1Checked] = useState(false);
  const [terms2Checked, setTerms2Checked] = useState(false);

  const [correctId, setCorrecId] = useState(true);
  const [correctPW, setCorrecPW] = useState(true);
  const [correctEmail, setCorrecEmail] = useState(true);
  const [correctNickName, setCorrecNickName] = useState(false);

  return (
    <>
      <Wrap>
        <JoinTitleWrap>
          <span>
            <span>티끌</span>회원가입을 위해 <br />
            정보를 입력해주세요
          </span>
        </JoinTitleWrap>

        <JoinTextBox>
          <li>
            <div>
              <input type='text' placeholder='아이디' />
              <Duplicate />
            </div>
            {correctId ? '' : <span>중복된 아이디입니다</span>}
          </li>
          <li>
            <div>
              <input type='password' placeholder='비밀번호' />
            </div>
          </li>
          <li>
            <div>
              <input type='password' placeholder='비밀번호 확인' />
            </div>
            {correctPW ? '' : <span>비밀번호가 일치하지 않습니다. </span>}
          </li>
          <li style={{ marginTop: '20px' }}>
            <div>
              <input type='text' placeholder='이메일' />
              <Duplicate />
            </div>
            {correctEmail ? '' : <span>이메일을 올바르게 작성해주세요</span>}
          </li>
          <li>
            <div>
              <input type='text' placeholder='닉네임' />
              <Duplicate />
            </div>
            {correctNickName ? '' : <span>중복된 닉네임입니다. </span>}
          </li>
        </JoinTextBox>

        <TermsChecked>
          <div>
            <span
              onClick={() => {
                {
                  terms1Checked
                    ? setTerms1Checked(false)
                    : setTerms1Checked(true);
                }
              }}>
              {terms1Checked ? <AutoLoginChecked /> : <AutoLoginBox />}
            </span>
            <span>이용약관 동의</span>
            <span>내용보기</span>
          </div>
          <div>
            <span
              onClick={() => {
                terms2Checked
                  ? setTerms2Checked(false)
                  : setTerms2Checked(true);
              }}>
              {terms2Checked ? <AutoLoginChecked /> : <AutoLoginBox />}
            </span>
            <span>개인정보 수집 및 활용동의</span>
            <span>내용보기</span>
          </div>
        </TermsChecked>
      </Wrap>
      <JoinButton>가입하기</JoinButton>
    </>
  );
};
export default Join;

const Wrap = styled.div`
  margin: 0 30px;
`;
const JoinTitleWrap = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;

  span {
    font-size: 1.75rem;

    span {
      font-size: 2rem;
      color: ${(props) => props.theme.mainMintColor};
      font-weight: 700;
      line-height: 150%;
      font-family: 'SEBANG_Gothic_Regular';
    }
  }
`;
const JoinTextBox = styled.ul`
  width: 100%;
  height: 325px;

  li {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;

    div {
      height: 50%;
      cursor: pointer;
      display: flex;

      border-bottom: 1px solid #dddddd;
    }
    span {
      padding: 2% 0;
      color: #ff7272;
      font-size: 0.875rem;
    }
  }

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
`;
const TermsChecked = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  div {
    width: 100%;
    display: flex;
    align-items: center;

    span:first-child {
      width: 5%;
      cursor: pointer;
    }
    span {
      width: 70%;
      margin-right: 5px;
      font-size: 0.875rem;
      color: #666666;
    }
    span:last-child {
      display: flex;
      justify-content: flex-end;
      width: 20%;
      color: ${(props) => props.theme.mainMintColor};
      cursor: pointer;
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
