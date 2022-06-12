import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


export const StyledSettingsIcon= styled(SettingsIcon)({
    color:'black',
    ":hover": {
      backgroundColor: "rgb(0,0,0,.2)", borderRadius:"30%" , padding:"10px"
    
    },
  
})


const FooterIconsx = {
    paddingLeft : '8px',
    marginLeft: '60px',

   ' &:hover':{
    cursor:'pointer',
    color:'#00BCD4'
    }
};

export const StyledFacebookIcon = styled(FacebookIcon)(() => FooterIconsx);
export const StyledTwitterIcon = styled(TwitterIcon)(() => FooterIconsx);
export const StyledInstgramIcon = styled(InstagramIcon)(() => FooterIconsx);
export const StyledLinkedInIcon = styled(LinkedInIcon)(() => FooterIconsx);