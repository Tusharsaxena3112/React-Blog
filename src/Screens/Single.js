import React from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Title from "../Components/TitleSinglePost";
import Comment from "../Components/Comment";
import PostContent from "../Components/PostContent";
import Related from "../Components/RelatedBox";

const Single = () => {
  return (
    <>
      <Header />
      <section class="blog-section">
        <div class="container">
          <div class="single-post no-sidebar">
            <Title />
            <div class="single-post-content">
              <img src="upload/single/4.jpg" alt="" />
              <PostContent />
              <Related />
            </div>
            <Comment />
            <Form />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Single;
