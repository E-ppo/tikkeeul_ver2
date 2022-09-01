import { useState } from 'react';
import styled from 'styled-components';
import { TotalTikkeeulPrice } from '../common';
import { DayTikkeeulList, Teasan } from '../tikkeeul';
import { TikkeeulData } from '../../data';

import { MenuAddButtonMint } from '../../styles/assets/svg/common';
import { MainCancleAddButton } from '../../styles/assets/svg/tikkeeulSvg';

interface buttonStyle {
  buttonbottom: number;
}

const MainTikkeeul = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Teasan />
      <TotalTikkeeulPrice
        totalPrice={TikkeeulData.totalPrice} //꼭 있어야하는 필수 프로퍼티
        fontSize={'1.2'} // 없어도 되는거 (없으면 1rem)
        divHight={'50'} // 없어도 되는거(px)
      />
      <DayTikkeeulList />

      {modalOpen ? (
        <>
          <ButtonFixed>
            <MainCancleAddButton
              onClick={() => {
                setModalOpen(false);
              }}
            />
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
                  <div>
                    <span>티끌 추가하기</span>
                    <div></div>
                  </div>
                </ADD>
              </AnimationBox>
            </ButtonArea>
          </Modal>
        </>
      ) : (
        <ButtonFixed>
          <MenuAddButtonMint
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </ButtonFixed>
      )}
    </div>
  );
};
export default MainTikkeeul;

const ButtonFixed = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 1;
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
