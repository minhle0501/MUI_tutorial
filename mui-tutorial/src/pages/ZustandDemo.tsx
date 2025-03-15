import { Container } from "@mui/material";
import ProductList from "../components/zustand_component/ProductList";
import Counter from "../components/zustand_component/Counter";


const ZustandDemo = () => {
  return (
    <Container>
      <Counter />
      <ProductList />
    </Container>
  )
}

export default ZustandDemo
