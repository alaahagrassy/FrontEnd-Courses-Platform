import { BootstrapInput, StyledButton } from '../styled/StyledForm'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { StyledError } from '../styled/StyledError'
import {Grid } from "@mui/material";
import Joi from 'joi'
import axios from 'axios';

const Register = () => {

  // const handlingSignUp=()=>
  //   {
  //     navigate('/login')
  //   }

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [errorList, setErrorList] = useState([]);

  const handLeInputChange = (e) => {
    let { name, value } = e.target;
    console.log(value);
    setState({ ...state, [name]: value });
  };

  function validateLoginForm(login) {
    const schema = Joi.object({
      userName: Joi.string(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().required(),
    });

    return schema.validate(login, { abortEarly: false });
  }



  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorList([]);
    let validationLoginFormResult = validateLoginForm(state);
    if (validationLoginFormResult.error ) {
      setErrorList(validationLoginFormResult.error.details);
    } else {
      axios.post('http://localhost:3001/users/login', {email, password }).then(({ data }) => {
        // console.log(data);
        navigate('/')
      }).catch((err) => {
        navigate('/login')
      })
      setErrorList([]);
    }
};

  

  return (
    <>
      <Grid paddingTop={'100px'}>

        <form onSubmit={handleSubmit}>
        

          <BootstrapInput
            placeholder="Email"
            type="text"
            value={email}
            sx={{ marginTop: "20px" }}
            onChange={handLeInputChange}
            name="email"
          />
          {errorList
            ? errorList.map((error, index) => {
              if (error.path[0] === "email") {
                return <StyledError key={index}>email Invalid</StyledError>;
              }
            })
            : ""}
          <BootstrapInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={handLeInputChange}
            sx={{ marginTop: "20px" }}
            name="password"
          />

          {errorList
            ? errorList.map((error, index) => {
              // console.log(error);

              if (error.path[0] === "password") {
                return <StyledError key={index}>Password Invalid</StyledError>;
              }
            })
            : ""}

          <StyledButton variant="contained" type="submit">
            Sign in
          </StyledButton>
        </form>
      </Grid>
    </>
  )
}
export default Register;