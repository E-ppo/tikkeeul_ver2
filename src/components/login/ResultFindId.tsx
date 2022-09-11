import { useState } from 'react';
import styled from 'styled-components';
import { FindKey } from '../../styles/assets/svg/login';

const ResultFindId = () => {
  const [isLocal, setIsLocal] = useState(true);
  return (
    <>
      <Wrap>
        <ImgWrap>
          <FindKey />
        </ImgWrap>
        {isLocal ? (
          <span>
            고객님의 아이디는 <br />
            <span>ABCE*** </span>
            입니다.
          </span>
        ) : (
          <span>
            고객님은
            <br />
            <span>카카오</span>
            가입고객입니다.
          </span>
        )}
      </Wrap>
      <LoginButton>로그인 하기</LoginButton>
    </>
  );
};
export default ResultFindId;
const Wrap = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.75rem;
    line-height: 150%;
    text-align: center;
    span {
      color: ${(props) => props.theme.mainMintColor};
    }
  }
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 320px;
`;

const LoginButton = styled.div`
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
