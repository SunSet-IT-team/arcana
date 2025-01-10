import React from "react";

import "./styles.scss";

import ServicesServices from "../../components/ServicesServices/ServicesServices";
import GoToPage from "../../components/GoToPage/GoToPage";

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GoToPage></GoToPage>
      <ServicesServices />
    </>
  );
};
export default Services;
