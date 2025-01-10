import React from "react";

import "./styles.scss";

import MonthResultsResults from "../../components/MonthResultsResults/MonthResultsResults";
import GoToPage from "../../components/GoToPage/GoToPage";

const Results = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GoToPage></GoToPage>
      <MonthResultsResults />
    </>
  );
};
export default Results;
