import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderLogo, HeaderHam } from "../../styles/assets/svg";
import styled, { keyframes } from "styled-components";

const slider = keyframes`
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0px);
  }
`;

interface IPropsData {
  title: string;
}

const Header = (props: IPropsData) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();

  return (
    <Wrap>
      <HeaderLogo />
      <span>{props.title}</span>
      <HeaderHam
        onClick={() => {
          openModal();
        }}
      />

      {modalOpen ? (
        <Backgroud>
          <Window>
            <Popup>
              <ButtonArea>
                <button onClick={closeModal}>X</button>
              </ButtonArea>
              <MenuBar>
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  데일리 티끌
                </div>
                <div
                  onClick={() => {
                    navigate("/choosetaesan");
                  }}
                >
                  태산정하기
                </div>
                <div
                  onClick={() => {
                    navigate("/community");
                  }}
                >
                  커뮤니티
                </div>
                <div
                  onClick={() => {
                    navigate("/ranking");
                  }}
                >
                  랭킹
                </div>
                <div
                  onClick={() => {
                    navigate("/mypage");
                  }}
                >
                  MY
                </div>
                <div
                  onClick={() => {
                    navigate("/mypage");
                  }}
                >
                  About
                </div>
              </MenuBar>
              <Footer>
                <p>회원가입</p>
                <p>로그인</p>
              </Footer>
            </Popup>
          </Window>
        </Backgroud>
      ) : (
        ""
      )}
    </Wrap>
  );
};
export default Header;

const Wrap = styled.div`
  width: 100wh;
  height: 50px;
  margin: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "SEBANG_Gothic";
  font-size: 1.5rem;
`;

const Backgroud = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const Window = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  width: 30vh;
  height: 100%;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slider};
  animation-fill-mode: forwards;
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: right;
  padding: 0.5rem;
  height: 5%;

  button {
    border: none;
    background: white;
  }
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85%;
  margin-top: 15%;

  div {
    display: flex;
    height: 10%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;
