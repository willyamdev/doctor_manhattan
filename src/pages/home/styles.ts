import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundImg from "../../assets/background/background.png";

export const HomeSection = styled.section`
  height: 100%;
  overflow-y: auto;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoContainer = styled.div`
  width: 100%;

  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 60px;

  h4 {
    font-size: 24px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 25px;
  }

  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7155813008797269) 43%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7155813008797269) 43%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7155813008797269) 43%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const StoryContainer = styled.div`
  flex-basis: 50%;
  padding: 15px 50px;

  p {
    font-size: 14px;
    text-transform: capitalize;
    color: #ffffff;
    white-space: pre-line;
  }
`;

export const HeaderTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 700px;
    margin-top: 25px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    color: #67cbf6;
  }
`;
