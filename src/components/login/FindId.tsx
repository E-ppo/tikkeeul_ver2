import { useState } from 'react';
import styled from 'styled-components';

const FindId = () => {
  const [correctEmail, setCorrecEmail] = useState(false);

  return (
    <>
      <Wrap>
        <FindIdTitleWrap>
          <span>
            아이디를 찾기 위해 <br />
            정보를 입력해 주세요.
          </span>
        </FindIdTitleWrap>
        <InputEmail>
          <div>
            <input type='text' placeholder='이메일' />
          </div>
          {correctEmail ? (
            ''
          ) : (
            <span>가입된 회원이 없습니다. 이메일을 다시 확인해주세요</span>
          )}
        </InputEmail>
      </Wrap>
      <NextButton>다음</NextButton>
    </>
  );
};
export default FindId;

const Wrap = styled.div`
  margin: 0 30px;
`;
const FindIdTitleWrap = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  align-items: flex-end;
  span {
    font-size: 1.75rem;
    line-height: 150%;
  }
`;
const InputEmail = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: 10%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 80%;
    border-bottom: 1px solid #dddddd;

    input {
      width: 90%;
      height: 90%;
      border: none;
      outline: none;
      font-size: 1.2rem;
      &::placeholder {
        color: #cccccc;
      }
    }
  }
  span {
    padding: 5% 0 0 0;
    color: #ff7272;
    font-size: 0.875rem;
  }
`;
const NextButton = styled.div`
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
