
import { Typography,Box, Table, TableBody, TableRow, TableCell } from "@mui/material"
import  {LocalOffer as Badge} from '@mui/icons-material'
import styled from "@emotion/styled"




const date=new Date(new Date().getTime()+(5*24*60*60*1000)); 
const SmallTxt=styled(Box)
`
  font-size:12px;
  & >p{
    font-size:12px;
    margin-top:10px;
   
  }
`;
const BadgeStyle=styled(Badge)`
  margin-right:10px;
  color:#00CC00;
  font-size:14px; 
`




const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'



const ProductsDetails = ({product}) => {
  return (
    <>
          <Typography>{product.title.longTitle}</Typography>
          <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
              8 Ratings and 1 review
              <Box component="span" ><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="fassure img" /></Box>
          </Typography>
          <Typography>
              {/* &nbsp;  a space deta hai */}
              <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box> &nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: '#878787' }}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
          </Typography>
          <Typography> Available offers</Typography>
          <SmallTxt>
            <Typography><BadgeStyle/>Special PriceGet extra ₹153 off (price inclusive of cashback/coupon)T&C</Typography>
            <Typography><BadgeStyle/>Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit </Typography>
            <Typography><BadgeStyle/>Partner OfferPurchase now & get 1 surprise cashback coupon in Future</Typography>
            <Typography><BadgeStyle/>Bank Offer 5% Cashback on Flipkart Axis Bank Card</Typography>
          </SmallTxt>

          <Table>
             <TableBody>
                <TableRow>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹ 40</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Seller</TableCell>
                    <TableCell>
                        <Box component="span" style={{color:'#2874f0'}}>SuperBookNet</Box>
                        <Typography style={{fontSize:14}}>Gst Invoice Available</Typography>
                        <Typography tyle={{fontSize:14}}>View more from seller starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </TableRow>
             </TableBody>
          </Table>
    </>
  )
}

export default ProductsDetails
