import styled from "@emotion/styled"
import { Box, InputBase,List,ListItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from "react"

import { useDispatch, useSelector  } from "react-redux"
import { getProducts } from "../../redux/actions/productAction"
import { Link } from 'react-router-dom';


const StyleBox = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const StyleInputBase = styled(InputBase)`
width:100%;
padding-left:20px;
font-size:unset;


`
const SearchIconWrapper = styled(Box)`
 color:blue;
 padding:5px;
 display:flex;

`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;



const Searchbar = () => {
  const [text,setText]=useState("")
  const {products}=useSelector(state=>state.getProducts);
  
  const dispatch=useDispatch();
 
  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])

   const getText=(text)=>{
      setText(text)
   }

  return (
    <StyleBox>
      <StyleInputBase 
      placeholder="Search for products,brands and more" 
      onChange={(e)=>getText(e.target.value)} 
      value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {
        text &&
          <ListWrapper>
            
              {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={()=>setText('')}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                
            }
          </ListWrapper>
      }
    </StyleBox>
  )
}

export default Searchbar
