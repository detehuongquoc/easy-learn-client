import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { vocabularySelector } from "../../store/reducers/vocabularySlice";
import { useDispatch, useSelector } from "react-redux";
import LernForm from "./LernForm";

const useStyles = makeStyles({
  root: { borderRadius: "20px" },
  media: {
    height: 140,
  },
});
const TodayVocabulary = ({ vocabulary }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{}}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            padding: "20px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {vocabulary.keyword}
        </Typography>
      </CardActionArea>
      <CardActions
        style={{
          margin: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary",
        }}
      >
        <LernForm id={vocabulary._id} />
      </CardActions>
    </Card>
  );
};

export default TodayVocabulary;
