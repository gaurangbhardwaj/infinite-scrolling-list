import { useState } from "react";
import styled from "styled-components";
import { ReduxEvent } from "constant";
import { useDispatch } from "react-redux";
import { setDataInLocalStorage } from "manager/session-manager";
import History from "manager/history";
import LoginForm, { LoginFormProps } from "./login-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginController = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const createUserSession = () => {
    setDataInLocalStorage("user-details", { username: userData.username });
    setDataInLocalStorage("is-logged-in", true);
    dispatch({
      type: ReduxEvent.LOGGED_IN,
      data: { username: userData.username },
    });
  };
  const onSubmitClick = async () => {
    setError("");
    if (userData.username !== "foo" || userData.password !== "bar") {
      return setError(
        `Wrong credentials. Hint: username "foo" and password: "bar"`
      );
    }
    dispatch({
      type: ReduxEvent.SHOW_LOADER,
    });
    setTimeout(() => {
      createUserSession();
      dispatch({
        type: ReduxEvent.HIDE_LOADER,
      });
      History.push("/home");
    }, 2000);
  };
  const loginFormProps: LoginFormProps = {
    userData,
    setUserData,
    error,
    onSubmitClick,
  };
  return (
    <Container>
      <LoginForm {...loginFormProps} />
    </Container>
  );
};

export default LoginController;
