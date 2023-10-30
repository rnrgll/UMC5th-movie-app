import styled from "styled-components";


export const MovieOverview = styled.div`
  box-sizing: border-box;
  width: 250px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: auto;
  font-size: 13px;
  display: ${(props) => (props.hide ? "none" : "block")};
`;

export const MovieOverviewTitle = styled.h4`
    font-size: 15px;
`;

export const MovieOverviewText = styled.p``;