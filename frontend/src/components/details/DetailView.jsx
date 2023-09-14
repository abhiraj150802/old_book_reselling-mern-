import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction";
import {Box, Grid} from "@mui/material"
import ActionItems from "./ActionItems";
// ab humko product ka id nikalna hoga tavi na display hoga so suke liye use karna hoga us
//params
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
  //ab iss id ko function m pass kar denge

import ProductsDetails from "./ProductsDetails";


  const Component=styled(Box)`
   background:#F2F2F2;
   margin-top:55px;
  `
  const Container=styled(Grid)`
    background:#FFFFFF; 
    display:flex;
  `
  const RightContainer=styled(Grid)`
      margin-top:50px;
  `
 

const DetailView = () => {
  

  const {id}=useParams();
  const dispatch=useDispatch()

  const{loading,product}= useSelector(state=>state.getProductDetails)
  

  useEffect(()=>{
    if(product && id!==product.id)
        dispatch(getProductDetails(id));

  },[dispatch,id,loading,product]) // iska matlab h koe v change huwa to phir se fun cl hoga


  return (
    <Component>
      {
         product&& Object.keys(product).length &&
        <Container container>
              <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItems product={product}/>
             </Grid>
             <RightContainer item lg={4} md={4} sm={8} xs={12}>
                <ProductsDetails product={product}/>
             </RightContainer>
        </Container>
      }
    </Component>
  )
}

export default DetailView
