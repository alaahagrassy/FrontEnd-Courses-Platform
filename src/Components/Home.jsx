import {Grid } from "@mui/material";
import { useState, useEffect } from 'react';
import axios from 'axios'
import SwipeableTextMobileStepper from "./Banner";
import MultiActionAreaCard from './Cards';

const HomePage = ()=>{

  
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:3001/course`)
        .then((response) => {
          setCourses(response.data);
        });
    }, []);
return (
    <>
    
    <SwipeableTextMobileStepper/>
<Grid container spacing={1} marginTop='-93px'>
          {Courses.map((course) => {
            return (
              <Grid item xs={5} lg={3}>
                <MultiActionAreaCard course={course} />
              </Grid>
            )
          })}
        </Grid>
        </>
)

}
export default HomePage