import styled from "styled-components";

export const TrailesContainer = styled.div`
  flex-basis: 50%;
  padding: 15px 0px;
`;

export const TrailersItemsContainer = styled.div`
  overflow: hidden;
  display: flex;
  scroll-behavior: smooth;
  /* ::-webkit-scrollbar {
    width: 0;
  } */

  img {
    width: 344px;
    margin-right: 16px;
  }
`;

export const ControllersContainer = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  margin-top: 20px;

  .carousel-items-trace-container {
    display: flex;
    margin-right: auto;
  }

  .right-left-controllers-container {
    .icon {
      cursor: pointer;
      font-size: 25px;
      color: #ffffff;
      margin-left: 20px;
    }
  }
`;

export const CarouselItemTrace = styled.div<{ isSelected?: boolean }>`
  width: 30px;
  height: 4px;

  margin-right: 6px;

  background-color: ${(props) =>
    props.isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)"};
`;
