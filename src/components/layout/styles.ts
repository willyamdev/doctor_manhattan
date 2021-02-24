import styled from "styled-components";
import backgroundImg from "../../assets/background/background.png";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentSection = styled.section`
  width: 100%;
  flex: 1;
`;
