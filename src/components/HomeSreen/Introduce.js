import { Button } from "@material-ui/core";
import React from "react";
const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-wrap-content">
        <div className="introduce-container">
          <div className="introduce-content">
            <h3>Learn it. Own it. Quizlet.</h3>
            <h5>
              With our ever-effective flashcards and new expert explanations,
              get a suite of science-backed study tools at your fingertips.
            </h5>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className="button-introduce"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
