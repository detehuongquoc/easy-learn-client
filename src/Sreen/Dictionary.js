import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Vocabularys from "../components/vocabulary/Vocabularys";
import {
  getAllVocabulary,
  getTranslateVocabulary,
} from "../store/reducers/vocabularySlice";
import axios from "axios";

const Dictionary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTranslateVocabulary());
  }, []);
  return (
    <div style={{ margin: "100px 0" }}>
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
    </div>
  );
};

export default Dictionary;
