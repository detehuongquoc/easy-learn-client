import { Container } from "@material-ui/core";
import React from "react";

const LastHome = () => {
  return (
    <div className="wrap-last-home">
      <Container style={{ margin: "50px 0" }}>
        <div className="first-center-wrap">
          <div className="first-center-wrap-content">
            <div>
              <h2>Empower your students</h2>
              <p>
                Help every student learn anything with confidence, no matter
                what they’re striving to achieve. Using Quizlet’s free study
                sets, study modes and in-class game, you can motivate your
                students quickly.
              </p>
            </div>
          </div>
          <div className="wrap-image">
            <img
              src="https://images.prismic.io/quizlet-prod/33696601-f5ff-43e0-9144-f9e30eed4514_Teacher+call+out.png?auto=compress,format"
              alt="Italian Trulli"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LastHome;
