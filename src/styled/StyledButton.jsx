import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";



export const StyledButton = styled(Button)(() => ({

  boxSizing: "border-box",
  fontFamily: "Roboto,sans-serif",
  fontWeight: 500,
  borderRadius: 999,
  padding: "2px 10px",
  color: "white",
  fontSize: "1em",
  textTransform: "initial",

}));


export const GetStartedButton = styled(Button)(() => ({
  minWidth: "60px",
  boxSizing: "border-box",
  fontFamily: "Roboto,sans-serif",
  margin: 45,
  borderRadius: 999,
  padding: "8px 20px",
  color: "white",
  fontSize: ".9em",
  textTransform: "uppercase",
  backgroundColor: "#304FFE",
  "&:hover": {
    backgroundColor: "#1A237E"
  }

}));



export const StyledMenuButton = styled(Button)(() => ({

  color: "white", border: "1px solid #00BCD4",
  marginLeft: '88px'


}))