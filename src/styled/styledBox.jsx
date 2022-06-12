import { styled} from "@mui/material/styles";
import { Box} from "@mui/material";

import { keyframes } from "@emotion/react";



const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


  //logo
export const LogoBox = styled(Box)(() => ({
      
    maxWidth:"65px",
     padding:"0",
     marginTop:"6px",
     marginRight:"100px",
   
     "&:hover": {
      
       animation: `${spin} .9s infinite ease`
   
     },
   }));


    //carousel
   export const CarouselBox= styled(Box)(()=>({

    position:"absolute",
    top:"80%",
    left:"18%",
    zIndex:9,
    width:"1000px",
    backgroundColor:"rgb(158,158,158,.3)",
    height:"450px",
    borderRadius:35,
    backdropFilter: "blur(20px)"
    
    }))
    