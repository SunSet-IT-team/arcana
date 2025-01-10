import React from "react";

import "./styles.scss";

import ResultsResults from "../../components/ResultsResults/ResultsResults";
import GoToPage from "../../components/GoToPage/GoToPage";

const Results = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GoToPage></GoToPage>
      <ResultsResults />
    </>
  );
};
export default Results;
