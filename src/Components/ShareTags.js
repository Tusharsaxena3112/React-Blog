import React from "react";

const ShareTags = () => {
  return (
    <div className="share-tags-box">
      <ul className="tags">
        <li>
          <a href="#">travel</a>
        </li>
        <li>
          <a href="#">adventure</a>
        </li>
        <li>
          <a href="#">lifestyle</a>
        </li>
      </ul>
      <ul className="shares-likes">
        <li>
          <a href="#" className="likes">
            Like <i className="fa fa-heart-o"></i> 14
          </a>
        </li>
        <li>
          <a href="#" className="facebook">
            <i className="fa fa-facebook"></i> 23
          </a>
        </li>
        <li>
          <a href="#" className="twitter">
            <i className="fa fa-twitter"></i> 5
          </a>
        </li>
        <li>
          <a href="#" className="pinterest">
            <i className="fa fa-pinterest"></i> 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareTags;
