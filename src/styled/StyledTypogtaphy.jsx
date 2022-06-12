import { styled } from '@mui/material';
import { Typography } from '@mui/material';


export const FooterTypography= styled(Typography)(()=>({

    fontWeight: 400,
    fontSize: "14px",
    marginBottom:5,

    "&:hover":{
      cursor:'pointer',
      textDecoration: 'underline'
    }
  
  
  }))