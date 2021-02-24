import styled from "styled-components";
import palette from "../../global/styles/global-variables";

export const SidebarContainer = styled.div`
  width: ${palette.TOOLBAR_AND_SIDEBAR_SIZE};
  height: 100%;

  border-right: 1px solid #ffffff;

  display: flex;
  flex-direction: column;
`;

export const HBOContainer = styled.div`
  border-bottom: 1px solid #ffffff;

  height: ${palette.TOOLBAR_AND_SIDEBAR_SIZE};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 45%;
  }
`;

export const MovieInfosContainer = styled.div`
  width: 100%;
  flex: 1.5;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    white-space: pre-line;
    writing-mode: vertical-rl;
    -webkit-writing-mode: tb-rl;
    -ms-writing-mode: tb-rl;
  }
`;

export const ShareContainer = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 16px;
    color: #ffffff;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;

    .item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      border-radius: 100%;
      border: 1px solid #ffffff;

      span {
        font-size: 10px;
        color: #ffffff;
      }
    }
  }
`;
