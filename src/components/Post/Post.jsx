import React from 'react';
import './Post.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Post = ({ card }) => {
    return (
        <Card sx={{ maxWidth: 345 }} className="post-card">
          <CardMedia
            component="img"
            height="140"
            image={card.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Species: {card.species}
              Status: {card.status}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export default Post