import { useEffect } from "react"
//components
import { Box, styled } from "@mui/material"
import Bannners from "./Bannners"
import Navbar from "./Navbar"
import {getProducts} from "../../redux/actions/productAction"
import {useDispatch,useSelector} from 'react-redux';
import Slide from "./Slide"
import Midslide from "./Midslide"
import Midsection from "./Midsection"


const Container = styled(Box)`
padding:10px;
background:#f2f2f2;
`


function Home() {
  const {products}=useSelector(state=>state.getProducts);
  // console.log(products);
  const dispatch=useDispatch();
 
  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])


  return (
    <>
      <Navbar />
      <Container>
        <Bannners />
        <Midslide products={products} title="Deal of the day" timer={true}/>
        <Midsection/>
        <Slide products={products} title="Discount for you" timer={false}/>
        <Slide products={products} title="Recommended" timer={false}/>
        <Slide products={products} title="Tranding offers" timer={false}/>
        <Slide products={products} title="Trendy Products" timer={false}/>
        <Slide products={products} title="Top peaks" timer={false}/>
      </Container>

    </>
  )
}

export default Home