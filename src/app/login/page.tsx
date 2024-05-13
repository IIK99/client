import Container from "../components/container";
import FromWrap from "../components/fromWrap";
import LoginFrom from "./loginFrom";

const Login = () => {
  return (
    <Container>
      <FromWrap>
        <LoginFrom />
      </FromWrap>
    </Container>
  );
};

export default Login;
