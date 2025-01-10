import React from "react";

import "./styles.scss";

import PartnerCalculatorCalculator from "../../components/PartnerCalculatorCalculator/PartnerCalculatorCalculator";
import GoToPage from "../../components/GoToPage/GoToPage";

const PartnerCalculator = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GoToPage></GoToPage>
      <PartnerCalculatorCalculator />
    </>
  );
};
export default PartnerCalculator;
