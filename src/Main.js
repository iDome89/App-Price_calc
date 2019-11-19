import React from "react";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Price from "./components/Price";
import Recap from "./components/Recap";
import Choices from "./components/questions/Choices";
import { PagesProvider } from "./components/model/PagesContext";
import PreviousPage from "./components/PreviousPage";
import Model from "./components/model/questions.model/Model";
import ConfirmPage from "./components/ConfirmPage";

function Main() {
  const model = Model();
  return (
    <Router>
      <div>
        <PagesProvider>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/recap" component={Recap} />
          <Route path="/confirm" component={ConfirmPage} />
          {model.map(choice => (
            <Route
              key={uuid()}
              path={`/questions/${choice.name}`}
              render={() => (
                <>
                  <Choices
                    path={`/questions/${choice.name}`}
                    values={choice.values}
                    pagename={choice.title}
                    id={choice.id}
                  />
                  <Price key={uuid()} />
                  <PreviousPage key={uuid()} />
                </>
              )}
            />
          ))}
        </PagesProvider>
      </div>
    </Router>
  );
}
export default Main;
