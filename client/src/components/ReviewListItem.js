import React from "react";

const ReviewListItem = ({review, index}) => {

    return (
      <div className="review">
      <li>
        <p>{ review }</p>
      </li>
      </div>
    );

  }



export default ReviewListItem;
