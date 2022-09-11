import styled from 'styled-components';

const ModifyPassword = () => {
  return (
    <>
      <Wrap>
        <ModifyPWTitleWrap>
          <span>
            새로운 비밀번호를
            <br />
            입력해주세요
          </span>
        </ModifyPWTitleWrap>

        <InputBox>
          <div>
            <input type='text' placeholder='아이디' />
          </div>
          <div>
            <input type='tet' placeholder='이메일' />
          </div>
          <span>
            입력하신 비밀번호가 일치하지 않습니다. <br />
          </span>
        </InputBox>
      </Wrap>
      <NextButton>다음</NextButton>
    </>
  );
};
export default ModifyPassword;

const Wrap = styled.div`
  margin: 0 30px;
`;
const ModifyPWTitleWrap = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: flex-end;

  span {
    font-size: 1.75rem;
    line-height: 150%;
  }
`;

const InputBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 10%;

  div {
    width: 100%;
    max-height: 60px;
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
    line-height: 150%;
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
