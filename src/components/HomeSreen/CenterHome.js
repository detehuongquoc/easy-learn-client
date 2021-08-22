import { Container, Button } from "@material-ui/core";
import React from "react";

const CenterHome = () => {
  return (
    <Container style={{ margin: "50px 0" }}>
      <div className="first-center-wrap">
        <div className="wrap-image">
          <img
            src="https://images.prismic.io/quizlet-prod/d4052d90-f71e-466a-86f5-080cf02de2da_20210814_QZ_Home_Flashcards.png?auto=compress,format"
            alt="Italian Trulli"
          />
        </div>
        <div className="first-center-wrap-content">
          <div>
            <h2>Flashcards on repeat. Study modes on shuffle.</h2>
            <p>
              Mixed with smart study tools, our flashcards have been helping
              students ace their toughest exams since 2005.
            </p>
          </div>
        </div>
      </div>
      <div className="first-center-wrap">
        <div className="first-center-wrap-content">
          <h2>Whether you plan or cram, find your study jam.</h2>
          <p>
            Early morning? All-nighter? With science-backed revision methods
            that improve active recall, Quizlet is designed to save you time.
          </p>
        </div>
        <div className="wrap-image">
          <img
            src="https://images.prismic.io/quizlet-prod/3a92729c-f212-4ac0-8dad-b2c875c57358_20210814_QZ_Home_StudyJam.png?auto=compress,format"
            alt="Italian Trulli"
          />
        </div>
      </div>
      <div className="first-center-wrap">
        <div className="wrap-image">
          <img
            src="https://images.prismic.io/quizlet-prod/99cd5988-f3a3-4432-aa3c-1e8941f59cb9_20210814_QZ_Home_Explanations.png?auto=compress,format"
            alt="Italian Trulli"
          />
        </div>
        <div className="first-center-wrap-content">
          <h2>Explanations you can trust.</h2>
          <p>
            Quizlet explanations show you step-by-step approaches to solve tough
            problems. Find solutions in 64 subjects, all written and verified by
            experts.
          </p>
        </div>
      </div>
      <div className="last-start">
        <h2>Ready to start getting better results?</h2>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "20px" }}
        >
          Get started
        </Button>
      </div>
    </Container>
  );
};

export default CenterHome;
