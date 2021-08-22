import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingVocabularySelector,
  vocabularyByDaySelector,
} from "../../store/reducers/vocabularySlice";
import AddVocabulary from "./AddVocabulary";
import TodayVocabulary from "./TodayVocabulary";
import Vocabulary from "./Vocabulary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const TodayVocaularys = () => {
  const dispatch = useDispatch();

  const vocabulary = useSelector(vocabularyByDaySelector);
  const isLoadingVocabulary = useSelector(isLoadingVocabularySelector);

  const classes = useStyles();
  return (
    <div>
      {isLoadingVocabulary ? (
        <div className="d-flex justify-content-center mt-2">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container spacing={4} style={{ margin: "20" }}>
          {vocabulary != false ? (
            vocabulary.map((vocabulary) => (
              <>
                <Grid
                  item
                  xs={12}
                  xl={4}
                  sm={3}
                  spacing={3}
                  style={{ width: "100%" }}
                >
                  <TodayVocabulary vocabulary={vocabulary} />
                </Grid>
              </>
            ))
          ) : (
            <h3
              style={{
                margin: "100px auto",
                borderRadius: "20px",
                border: "1px solid black",
                padding: "50px",
              }}
            >
              No vocabulary to learn today !
            </h3>
          )}
        </Grid>
      )}
    </div>
  );
};

export default TodayVocaularys;
