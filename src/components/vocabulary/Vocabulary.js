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
import {
  vocabularySelector,
  DeleteVocabulary,
} from "../../store/reducers/vocabularySlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditVocabularyForm from "./EditVocabularyForm";

const useStyles = makeStyles({
  root: {
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  media: {
    height: 140,
  },
  button: {
    margin: 10,
  },
});
const Vocabulary = ({ vocabulary }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardActionArea style={{}}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          style={{
            padding: "10px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {vocabulary.keyword}
        </Typography>
        <CardContent style={{}}>
          <Typography
            gutterBottom
            variant="h7"
            component="h5"
            color="primary"
            style={{
              padding: "0 16px",
            }}
          >
            {vocabulary.keyword} : {vocabulary.means}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <EditVocabularyForm id={vocabulary._id} />
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          style={{ marginLeft: 10 }}
          size="small"
          onClick={() => {
            dispatch(DeleteVocabulary(vocabulary._id));
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Vocabulary;
