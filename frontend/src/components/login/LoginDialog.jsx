
import styled from "@emotion/styled"
import {Box, Button, Dialog, TextField, Typography} from "@mui/material"
import { useState,useContext } from "react"
import { AuthenticateSignup ,AuthenticateLogin} from "../../service/Api"
import { DataContext } from "../../context/DataProvider"


const Container=styled(Box)`
height:70vh;
width:90vh; 
`
const Image=styled(Box)`
 background:#2874f0;
 height:100%;
 width:40%;
 padding:45px 20px;

 &>img{
  position: relative;
    height: 115px;
    width: 115px;
    top: 80px;
    left: 25px;

 }
 &>p,&>h5{
   color:#fff;
   font-weight:600;
 }
`

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>div,>p,>button {
  margin-top:20px;
}
`
const LoginButton=styled(Button)`
text-transform:none;
background:orange;
color:#fff;
height:48px;
border-radius:3px;
`
const RequestOTP=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text=styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount=styled(Typography)`
 font-size:14px;
 text-align:center;
 color:#2874f0;
 font-weight:600;
 cursor:pointer;
`
const Error=styled(Typography)`
  font-weight:600;
  font-size:12px;
  line-height:0;
  color:red;

`

const accountInitaialvalues={
   login:{
        view:"login",
        heading:"Login",
      subHeading:"Get access to your order,wishlist and recomendation"
   },
   signup:{
      view:"signup",
      heading:"Looks like u are new here",
      subHeading:"Signup with your mobile no to get started"

   }

}

const signupInitialValue={
  firstname:"",
  lastname:"",
  username:"",
  email:"",
  password:"",
  phone:""
}

const loginInitialValue={
  username:"",
  password:""
}

const LoginDialog = ({open,setopen}) => {
  const [account,toggleaccont]=useState(accountInitaialvalues.login);
  const [singupValue,setsignupValue]=useState(signupInitialValue);
  const {setAccount}=useContext(DataContext); 
  const [login,setLogin]=useState(loginInitialValue);
  const [error,setError]=useState(false);


    const handleClose=()=>{
        setopen(false)
        //jab close karenge to initial value phir se login kar denge
        toggleaccont(accountInitaialvalues.login)
        setError(false);
    }
    const toggleSinup=()=>{
      toggleaccont(accountInitaialvalues.signup);
    }
    const onInputChange=(e)=>{
        setsignupValue({...singupValue,[e.target.name]:e.target.value})
        // console.log(singupValue)
    }

   const signupUser=async()=>{
       let response=await AuthenticateSignup(singupValue) ;
       if(!response) return
       handleClose();
       setAccount(singupValue.firstname);
   }
  const onvalueChange=(e)=>{
     setLogin({...login,[e.target.name]:e.target.value})
     
  }

  const LoginUser=async()=>{
    let response=await AuthenticateLogin(login);
    if(response.status===200)
    {
      handleClose();
      console.log(response);
      setAccount(response.data.data.firstname);
    }
    else{
      setError(true);
    }
  }

  return (
    <> 
      <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"  }}}>
        <Container>
          <Box style={{display:"flex",height:"100%"}}>
            <Image>
                  <Typography variant="h5">{account.heading}</Typography>
                  <Typography style={{marginTop:20}}>{account.subHeading}</Typography>

                  <img src=" https://th.bing.com/th/id/R.9cfd56fb4c6fdeee7bc329e35241a196?rik=RHCUfoSFLlUcLA&riu=http%3a%2f%2fsmpt.handytrac.com%2fwp-content%2fuploads%2f2018%2f03%2fcybersecurity-pic-circle-768x768.png&ehk=R%2fgHSS6myQdjYtDkinMmnV2pSLqsgb6ohdwgy5GctbE%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
            </Image>
            { account.view==="login" ?
            <Wrapper>
              <TextField variant="standard" onChange={(e)=>onvalueChange(e)} name="username" label="Enter your username" />
              <TextField variant="standard" onChange={(e)=>onvalueChange(e)} name="password" label="Enter password" />
              {error && <Error>please enter valid details</Error>}

              <Text>By continuing , you agree to booknook terms and condition</Text>
              <LoginButton onClick={()=>LoginUser()}>Login</LoginButton>
              <Typography style={{textAlign:"center"}}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={()=>toggleSinup()}>New to BOOKSTORE?create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="Enter Firstname" />
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Lastname" />
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" />
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone" />
             
              <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
              
            </Wrapper>
            }


          </Box>
        </Container>
      </Dialog>
    </>
  )
}

export default LoginDialog
