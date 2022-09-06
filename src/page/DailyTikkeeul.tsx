import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/common';
import { MainTikkeeul, AddTikkeeul } from '../components/tikkeeul';
import { MenuAddButtonMint, GoBack } from '../styles/assets/svg/common';
import { MainCancleAddButton } from '../styles/assets/svg/tikkeeulSvg';
import { useSetRecoilState } from 'recoil';
// import { ComponentStateAtom } from '../store/atoms';

interface buttonStyle {
  buttonbottom: number;
}

function DailyTikkeeul() {
  const [modalOpen, setModalOpen] = useState(false);
  const [viewButton, setViewButton] = useState(true);
  const [addFuntion, setAddFuntion] = useState(false);
  const [viewState, setViewState] = useState(<AddTikkeeul />);

  // const setComponentState = useSetRecoilState(ComponentStateAtom);

  return (
    <Wrap>
      <Header title={'데일리 티끌'} />
      <MainTikkeeul />

      {modalOpen ? (
        <>
          <ButtonFixed>
            {viewButton ? (
              <MainCancleAddButton
                onClick={() => {
                  setModalOpen(false);
                  setAddFuntion(true);
                }}
              />
            ) : (
              ''
            )}
          </ButtonFixed>

          <Modal>
            <ButtonArea>
              <AnimationBox buttonbottom={150}>
                <ADD>
                  <div>
                    <span>태산 관리하기</span>
                    <div></div>
                  </div>
                </ADD>
                <ADD>
                  <div
                    onClick={() => {
                      setAddFuntion(true);
                    }}>
                    <span>티끌 추가하기</span>
                    <div></div>
                  </div>
                </ADD>
              </AnimationBox>
            </ButtonArea>
          </Modal>
          {addFuntion ? (
            <AddMenuComponent>
              <Header title={'데일리 티끌'} />

              <AddTitle>
                <GoBack
                  onClick={() => {
                    setModalOpen(false);
                    setAddFuntion(false);
                  }}
                />
                <span>티끌 등록하기</span>
                <div />
              </AddTitle>
              {viewState}
            </AddMenuComponent>
          ) : (
            ''
          )}
        </>
      ) : (
        <ButtonFixed>
          {viewButton ? (
            <MenuAddButtonMint
              onClick={() => {
                setModalOpen(true);
              }}
            />
          ) : (
            ''
          )}
        </ButtonFixed>
      )}
    </Wrap>
  );
}
export default DailyTikkeeul;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonFixed = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 1;
`;

const AddMenuComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Modal = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ButtonArea = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const AnimationBox = styled.div<buttonStyle>`
  animation: showButton 1s;
  margin: 0 30px ${(props) => props.buttonbottom}px 0;

  @keyframes showButton {
    from {
      margin: 0 30px 0 0;
    }
    to {
      margin: 0px 30px ${(props) => props.buttonbottom}px 0;
    }
  }
`;

const ADD = styled.div`
  margin-top: 15%;

  div {
    display: flex;
    align-items: center;

    span {
      color: white;
      font-size: 1.5rem;
      font-weight: 400;
      margin-right: 15px;
    }
    div {
      width: 70px;
      height: 70px;
      background-color: #e0e0e0;
      border-radius: 50%;
    }
  }
`;

const AddTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  span {
    font-size: 1.25rem;
  }
  div {
    width: 12px;
    height: 23px;
  }
`;
