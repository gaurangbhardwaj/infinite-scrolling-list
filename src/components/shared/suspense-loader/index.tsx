import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 10000000;
`;

const Spinner = styled.div`
  border: 8px solid #8ebf4a;
  border-radius: 50%;
  border-top: 8px solid #016738;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    border: 4px solid #8ebf4a;
    border-top: 4px solid #016738;
    width: 40px;
    height: 40px;
  }
`;

const Loader = () => (
  <Container>
    <Spinner />
  </Container>
);

export default Loader;
