import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./header";
import { mockData } from "mock-data";
import _ from "lodash";

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 768px;
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid gray;
  img {
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 50%;
    background-color: gray;
    @media only screen and (max-width: 600px) {
      height: 30px;
      width: 30px;
    }
  }
  div {
    font-size: 20px;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const Home = () => {
  const [data, setData] = useState(mockData() || []);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    function infiniteScroll() {
      console.log("infiniteScroll");
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setIsLoading(true);
        setTimeout(() => {
          setData((prev) => [...prev, ...mockData()]);
          setIsLoading(false);
        }, 1000);
      }
    }
    const onPageScrollEvent = _.throttle(() => infiniteScroll(), 500);
    window.addEventListener("scroll", onPageScrollEvent);
  }, []);
  return (
    <>
      <Header />
      <Page>
        <Container>
          {data.map(({ name, img }, idx) => {
            return (
              <ContactRow key={idx}>
                <img src={img} />
                <div>{name}</div>
              </ContactRow>
            );
          })}
          {isLoading && <h1>Loading...</h1>}
        </Container>
      </Page>
    </>
  );
};

export default Home;
