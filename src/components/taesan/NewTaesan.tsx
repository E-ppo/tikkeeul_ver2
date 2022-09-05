import { LeftArrowBlack, SearchIcon } from '../../styles/assets/svg';
import styled from 'styled-components';
import FindTaesan from './FindTaesan';
import MakeTaesan from './MakeTaesan';
import { useState } from 'react';

type NewTaesanProps = {
  close: Function;
};

function NewTaesan({ close }: NewTaesanProps) {
  return (
    <Wrap>
      <>
        <GobackBtn onClick={close} />
        <FindTaesan />
      </>
    </Wrap>
  );
}

const GobackBtn = styled(LeftArrowBlack)`
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  margin: 10px 30px;
`;

export default NewTaesan;
