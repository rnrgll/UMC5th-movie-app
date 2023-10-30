import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 250px;
  margin: 15px;
  border-radius: 5px;
  background-color: #383d79;
  color: white;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
  position: relative;
`;


export const MovieImage = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const MovieVote = styled.span`
  margin-left: 7px;
`;

