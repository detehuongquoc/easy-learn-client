import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isAuthenticatedSelector,
  userSelector,
} from "../../store/reducers/userSlice";
import {
  isLoadingVocabularySelector,
  vocabularySelector,
} from "../../store/reducers/vocabularySlice";
import AddVocabulary from "./AddVocabulary";
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
const Vocabularys = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const user = useSelector(userSelector);
  const vocabulary = useSelector(vocabularySelector);
  const isLoadingVocabulary = useSelector(isLoadingVocabularySelector);

  const classes = useStyles();

  return (
    <div>
      {isLoadingVocabulary ? (
        <div className="d-flex justify-content-center mt-2">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <Typography
            gutterBottom
            variant="p"
            component="h3"
            color="secondary"
            style={{
              textTransform: "uppercase",
              padding: 16,
              marginBottom: 25,
              textAlign: "center",
            }}
          >
            All Vocabularys
          </Typography>
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
                    <Vocabulary vocabulary={vocabulary} />
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
                No vocabulary ! Please add first vocabulary
              </h3>
            )}
          </Grid>
        </>
      )}
      <AddVocabulary />
    </div>
  );
};

export default Vocabularys;
