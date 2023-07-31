import { Button,Box, Typography ,styled} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from "../login/LoginDialog";
import { useState ,useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";


const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button,> p,> div{
    margin-right:40px;
    font-size:16px;
    align-item:center;
}
`
const CartStyle=styled(Box)`
  display:flex;
  `
  const LoginButton=styled(Button)`
  color:#2874f0;
  background:#ffffff;
  text-transform:none;
  padding:4px 40px;
  border-radius:2px;
  box-shadow:none;
  font-weight:600;
  height:32px;
  `

function CustomButton() {
    const [open,setopen]=useState(false)
    const {account,setAccount}=useContext(DataContext)

    const openDialog=()=>{
       setopen(true);
    }
    return (
        <Wrapper>
        {
             account?<Profile account={account} setAccount={setAccount}/>:
             <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
              

        }
           
            <Typography style={{marginTop:3 ,width:135}}>Become a seller</Typography>
            <Typography style={{marginTop:3}}>more</Typography>
            <CartStyle>
               
                    <ShoppingCart/>
                    <Typography>cart</Typography>
            </CartStyle>
            <LoginDialog open={open} setopen={setopen}/>
        </Wrapper>

    )
}

export default CustomButton