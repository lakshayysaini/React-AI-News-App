import React, {useEffect, useState, createRef}from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles.js';


const NewsCard = ({article :{description, publishedAt, source, title, url, urlToImage}, i, activeArticle}) => {

  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(()=>{
    window.scroll(0,0);

    setElRefs((refs) => Array(20).fill().map((_,j) =>refs[j] || createRef()));
  }, []);

  useEffect(() => {
      if(i=== activeArticle && elRefs[activeArticle]){
        scrollToRef(elRefs[activeArticle]);
      }
  },[i, activeArticle, elRefs]);



  return (
    <Card ref={elRefs[i]} className={activeArticle === i ? classes.activeCard : classes.card}>
      <CardActionArea href={url} target="_blank">
          <CardMedia className={classes.media} image={urlToImage || 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'}/>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2" >{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary" component="h2" >{source.name}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
          </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Read More</Button>
        <Typography variant="h5" color="textSecondary">{i+1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard;