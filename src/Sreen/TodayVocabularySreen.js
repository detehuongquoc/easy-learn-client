import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodayVocaularys from "../components/vocabulary/TodayVocabularys";
import Vocabularys from "../components/vocabulary/Vocabularys";
import { authLoadingSelector } from "../store/reducers/userSlice";
import {
  getVocabularyByDay,
  vocabularyByDaySelector,
} from "../store/reducers/vocabularySlice";

const TodayVocaularySreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVocabularyByDay());
  }, []);
  return (
    <Container style={{ minHeight: "600px" }}>
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
        Today Vocabularys
      </Typography>
      <TodayVocaularys />
      {/* <Button
        style={{
          position: "fixed",
          right: 60,
          bottom: 60,
          borderRadius: "10px",
        }}
        variant="contained"
        color="secondary"
        startIcon={<FaPlus />}
      >
        Add
      </Button> */}
    </Container>
  );
};

export default TodayVocaularySreen;
