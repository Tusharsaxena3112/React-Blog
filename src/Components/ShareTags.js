import React from "react";

const ShareTags = () => {
  return (
    <div class="share-tags-box">
      <ul class="tags">
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
      <ul class="shares-likes">
        <li>
          <a href="#" class="likes">
            Like <i class="fa fa-heart-o"></i> 14
          </a>
        </li>
        <li>
          <a href="#" class="facebook">
            <i class="fa fa-facebook"></i> 23
          </a>
        </li>
        <li>
          <a href="#" class="twitter">
            <i class="fa fa-twitter"></i> 5
          </a>
        </li>
        <li>
          <a href="#" class="pinterest">
            <i class="fa fa-pinterest"></i> 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareTags;
