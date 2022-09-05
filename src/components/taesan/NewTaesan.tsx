import { GoBack, SearchIcon } from '../../styles/assets/svg/common';
import styled from 'styled-components';
import { FindTaesan, MakeTaesan } from '../taesan';
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

const GobackBtn = styled(GoBack)`
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  margin: 10px 30px;
`;

export default NewTaesan;
