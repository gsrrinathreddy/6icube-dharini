import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BasicCard(props) {
    const image=props .image
  return (
    <Card sx={{ maxWidth: 345, margin:"10px" }}>
      <CardMedia
        sx={{ height: 160, margin:"10px" }}
        image={props.image}
        title={props.title}
        date={props.date}
        time={props.time}
        locaton={props.location}
      />
      <CardContent>
    
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {props.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        <DateRangeIcon/> {props.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        <AccessTimeIcon/>{props.time}
        </Typography> 
        <Typography variant="body2" color="text.secondary" >
        <LocationOnIcon/>{props.location}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}