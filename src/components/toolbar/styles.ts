import styled from "styled-components";
import palette from "../../global/styles/global-variables";

export const ToolbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;

  height: ${palette.TOOLBAR_AND_SIDEBAR_SIZE};

  position: absolute;
  width: 100%;
`;

export const BuyTicketButton = styled.button`
  cursor: pointer;
  width: 149px;
  height: 44px;

  background: none;

  border: 1px solid #ffffff;
  filter: drop-shadow(0px 0px 16px #88dbff);

  font-weight: 600;
  font-size: 16px;
  color: #ffffff;

  :focus {
    outline: none;
  }
`;

export const TextsContainer = styled.div`
  margin-right: 40px;

  span {
    cursor: pointer;
    margin-right: 40px;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
`;
