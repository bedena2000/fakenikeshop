import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Context from "../../Context/Context";
import { Skeleton } from "@mui/material";
import styles from "./EachItem.module.css";

export default function MediaCard({ eachItemInfo }) {
  //   const { category, title, price, description, image } = eachItemInfo;
  const {
    storeData: { isLoading },
  } = useContext(Context);
  const [loadCard, setLoadCard] = useState(isLoading);

  console.log(eachItemInfo);

  useEffect(() => {
    console.log(loadCard);
  }, [isLoading]);

  return (
    <Card className={`${styles["each-card-item"]}`} sx={{ maxWidth: 345 }}>
      {isLoading ? (
        <div
          style={{
            height: "300px",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            objectFit="contain"
            image={eachItemInfo.image}
            alt="green iguana"
            style={{
              height: "100%",
              maxWidth: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      ) : (
        <Skeleton animation="wave" />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
