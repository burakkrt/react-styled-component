import styled from "styled-components";

export const AnimalCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
  padding: 1rem 0;
  background-color: #C4DFDF;
  s
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
`;

export const AnimalCardTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #99627A;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const AnimalImageFrame = styled.div`
  overflow: hidden;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  margin: 0;
`;

export const AnimalContent = styled.p`
  color: #526D82;
  max-width: 70%;
`;