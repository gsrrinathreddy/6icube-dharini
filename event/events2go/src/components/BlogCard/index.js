import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BlogCard(props) {
    const date=props.date
    const title=props.title
    const image=props.image
    const description=props.description
  return (
    <Card sx={{ maxWidth: 800,margin: "40px" }}>
     <Typography gutterBottom variant="h6" textAlign="justify" component="div">
         {props.date}
        </Typography>
        <Typography gutterBottom variant="h6" textAlign="justify" component="div">
          {props.title}
        </Typography>
      <CardMedia
        sx={{ height: 400,width: 800 }}
        date={props.date}
        title={props.title}
        image={props.image}
        description={props.description}
      />
      <CardContent>
        
        <Typography gutterBottom variant="h7" textAlign="justify" component="div">
          {props.description}
        </Typography>
        
      </CardContent>
      <CardActions>
       <Button variant="outlined" color="inherit">
        More Details
       </Button>
      </CardActions>
    </Card>
  );
}