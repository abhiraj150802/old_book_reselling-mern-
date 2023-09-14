import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"





const LeftContainer = styled(Box)`
  min-width:40%;
  padding:40px 0 0 80px;

`
const Image = styled('img')({
    padding:15  ,
    width: '90%'

})
const StyleButton = styled(Button)`
  width:48%;
  height:50px;
  border-radius:2px;
`



const ActionItems = ({ product }) => {
    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
                <Image src={product.detailUrl} alt="product img" />
            </Box>
            <StyleButton variant="contained" style={{ marginRight: 10, background: '#ff9f00' }}>Add to Cart</StyleButton>
            <StyleButton variant="contained" style={{ background: '#fb541b' }}>Buy now</StyleButton>
        </LeftContainer>
    )
}

export default ActionItems
