import styled from 'styled-components';
import Header from '../components/common/Header';
import { DeleteBtn, AddBtn } from '../styles/assets/svg/common';
import { MainTikkeeul } from '../components/tikkeeul';
import { useState } from 'react';
import { MyTaesan, NewTaesan, FindTaesan } from '../components/taesan';

function ChooseTaesan() {
  const [openFindTaesan, setOpenFindTaesan] = useState(false);

  const activeFindTaesan = () => {
    setOpenFindTaesan((prev) => !prev);
  };

  return (
    <>
      <Header title={'태산 정하기'} />
      {openFindTaesan ? (
        <NewTaesan close={() => setOpenFindTaesan(false)} />
      ) : (
        <>
          <MyTaesan />
          <AddModal onClick={activeFindTaesan}>
            <AddBtn />
          </AddModal>
        </>
      )}
    </>
  );
}
const AddModal = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.mainMintColor};
`;
export default ChooseTaesan;
