import styled from "@emotion/styled"
import { Box, InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

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

const Searchbar = () => {
  return (
    <StyleBox>
      <StyleInputBase placeholder="Search for products,brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </StyleBox>
  )
}

export default Searchbar
