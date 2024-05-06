import Container from "../components/container";
import CartClient from "./cartClient";

export default function cart() {
  return (
    <div className=" pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
}
