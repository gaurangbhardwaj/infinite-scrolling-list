import { useState } from "react";
import styled from "styled-components";
import { ReduxEvent } from "constant";
import { useDispatch } from "react-redux";
import { removeDataFromLocalStorage } from "manager/session-manager";
import History from "manager/history";

const Container = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #282a35;
  div {
    color: red;
    font-size: 16px;
    cursor: pointer;
    padding: 12px 8px;
    @media only screen and (max-width: 600px) {
      font-size: 12px;
      cursor: pointer;
      padding: 10px 5px
    }
  }
`;
const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({
      type: ReduxEvent.SHOW_LOADER,
    });
    removeDataFromLocalStorage("user-details");
    removeDataFromLocalStorage("is-logged-in");
    dispatch({
      type: ReduxEvent.LOGGED_OUT,
    });
    setTimeout(() => {
      History.push("/login");
      dispatch({
        type: ReduxEvent.HIDE_LOADER,
      });
    }, 1000);
  };
  return (
    <Container>
      <div onClick={logout}>Logout</div>
    </Container>
  );
};

export default Header;
