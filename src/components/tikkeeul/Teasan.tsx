import styled from "styled-components";

interface ITesanInfo {
  title: string;
  img: string;
  goalPercent: number;
  goalPrice: number;
}

const Teasan = () => {
  return (
    <Wrap>
      <TeasanInsideWrap>
        <TesanProductInfo>
          <div>
            <img
              src="https://velog.velcdn.com/images/eppo/post/2e1a14ff-f6cd-4f63-9cd1-330722065e62/image.png"
              alt=""
            />
          </div>
          <div>
            <span>공기청정기</span>
          </div>
        </TesanProductInfo>
        <TesanPriceInfo>
          <span>320,000원까지 50%</span>
        </TesanPriceInfo>
      </TeasanInsideWrap>
      <TeasanPercentView />
    </Wrap>
  );
};
export default Teasan;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TeasanInsideWrap = styled.div`
  position: absolute;
  width: 100%;
`;

const TeasanPercentView = styled.div`
  bottom: 0;
  background-color: ${(props) => props.theme.mainMintColor};
  width: 100%;
  height: 50%;
`;

const TesanProductInfo = styled.div`
  display: flex;
  margin: 0 30px;
  justify-content: space-between;

  div:first-child {
    display: flex;
    align-items: center;
    align-items: flex-end;

    img {
      max-width: 120px;
      min-height: 100px;

      border-radius: 50%;
    }
  }

  div:last-child {
    display: flex;
    align-items: flex-end;

    span {
      font-family: "NotoSansKR-Regular";
      font-size: 2.5rem;
      display: flex;
    }
  }
`;

const TesanPriceInfo = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin: 0 30px;

  display: flex;
  justify-content: flex-end;

  span {
    font-size: 2rem;
  }
`;
