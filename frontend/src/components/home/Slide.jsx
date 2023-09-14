import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography,Button,styled, Divider } from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component=styled(Box)`
margin-top:10px;
background:#FFFFFF; 
`
const Deal=styled(Box)`
 padding:15px 20px;
 display:flex;

`
const Timer=styled(Box)`
 display:flex;
 margin-left:10px;
 text-align:center;
 color:#7f7f7f;
`
const DealText=styled(Typography)`
 font-weight:600;
 margin-right:24px;
`
const ViewAllButton=styled(Button)`
 margin-left:auto;
 background-color:#2874f0;
 border-radius:2px;
 font-size:12px;
`
const Image=styled('img')({
  width:'auto',
  height:150
})

const Text=styled(Typography)`
 font-size:14px;
 margin-top:5px;
`

const Slide = ({products,title,timer}) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer=({hours,minutes,seconds})=>{
       return <Box variant="span">{hours}:{minutes}:{seconds} Left </Box>
  }
  return (
   <Component>
     <Deal>
          <DealText>{title}</DealText>
          { timer &&
          <Timer>
            <img src={timerURL} alt="clockimg" style={{width:24}} />
            <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
          </Timer>
          }
          <ViewAllButton variant="contained" color="primary">view all</ViewAllButton>
     </Deal>
<Divider/>
     <Carousel 
       responsive={responsive}
       swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
       >
       {
        products.map(products=>{
         
            return(
              <Link to={`product/${products.id}`} style={{textDecoration:"none"}}>
              <Box textAlign="center" style={{padding:'25 15'}}>
                <Image src={products.url} alt="img" />
                <Text style={{fontWeight:600,color:'#121212'}}>{products.title.shortTitle}</Text>
                <Text style={{color:'green',opacity:'.6'}}>{products.discount} </Text>
                <Text style={{color:'#212121'}}>{products.tagline} </Text>

             </Box>
             </Link>
            )
            
        })
       }

    </Carousel>
   </Component>
  )
}

export default Slide
