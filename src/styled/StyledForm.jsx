import { styled } from "@mui/material/styles";
import { TextField ,Button } from "@mui/material";

export const BootstrapInput = styled(TextField)(({ theme }) => ({
  borderRadius: 4,
  position: "relative",
  backgroundColor: '#00BCD4',
  display: "block",
  fontSize: 16,
  width: '15%',
  margin: 'auto',
  color: `${theme.palette.primary.main}`,
  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),

  "&:focus": {
    boxShadow: `${(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
}));


export const StyledButton = styled(Button)(({ theme }) => ({
    width: "auto",
    margin: "auto",
    marginLeft: '623px',
    marginTop: "20px",
    fontFamily:"Oswald",
    textTransform: "uppercase",
    backgroundColor:`rgba(77,126,150,0.8)`,
    "&:hover":{
    backgroundColor:`${theme.palette.primary.main}`

    }
}));