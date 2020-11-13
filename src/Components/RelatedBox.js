import React from "react";

const Related = () => {
  return (
    <div class="related-box">
      <h2>Related Posts</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="news-post standard-post text-left">
            <div class="image-holder">
              <a href="single-post.html">
                <img src="upload/blog/p1.jpg" alt="" />
              </a>
            </div>
            <a class="text-link" href="#">
              Food
            </a>
            <h2>
              <a href="single-post.html">Fusce pellentesque suscipit.</a>
            </h2>
            <ul class="post-tags">
              <li>
                by <a href="#">Stan Enemy</a>
              </li>
              <li>3 days ago</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="news-post standard-post text-left">
            <div class="image-holder">
              <a href="single-post.html">
                <img src="upload/blog/p2.jpg" alt="" />
              </a>
            </div>
            <a class="text-link" href="#">
              Lifestyle
            </a>
            <h2>
              <a href="single-post.html">Quisque a lectus. </a>
            </h2>
            <ul class="post-tags">
              <li>
                by <a href="#">Stan Enemy</a>
              </li>
              <li>3 days ago</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="news-post standard-post text-left">
            <div class="image-holder">
              <a href="single-post.html">
                <img src="upload/blog/p3.jpg" alt="" />
              </a>
            </div>
            <a class="text-link" href="#">
              Travel
            </a>
            <h2>
              <a href="single-post.html">Vestibulum commodo tortor.</a>
            </h2>
            <ul class="post-tags">
              <li>
                by <a href="#">Stan Enemy</a>
              </li>
              <li>3 days ago</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Related;