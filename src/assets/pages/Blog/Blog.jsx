import React from "react";

import "./styles.scss";

import BlogBlog from "../../components/BlogBlog/BlogBlog";
import GoToPage from "../../components/GoToPage/GoToPage";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GoToPage></GoToPage>
      <BlogBlog />
    </>
  );
};
export default Blog;
