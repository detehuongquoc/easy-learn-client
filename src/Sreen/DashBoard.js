import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Vocabularys from "../components/vocabulary/Vocabularys";
import { getAllVocabulary } from "../store/reducers/vocabularySlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVocabulary());
  }, []);
  return (
    <Container style={{ minHeight: "600px" }}>
      <Vocabularys />
    </Container>
  );
};

export default DashBoard;
