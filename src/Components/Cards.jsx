import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

export default function MultiActionAreaCard(props) {
    const {name , description}=props.course
  return (
    
    <Card sx={{ width: "260px" , height:"340px" , marginLeft:'25px' ,marginBottom:'20px'}}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}