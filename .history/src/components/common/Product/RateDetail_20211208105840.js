import React from "react";
import ReactStars from "react-rating-stars-component";
export default function RateDetail({ rate }) {
  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

  return (
    <div className="rate-detail">
      <div className="row">
        <div className="col col-md-2 col-4 rate-img">
          <img
            src={process.env.PUBLIC_URL + rate.imgLink}
            alt="Không load được ảnh"
          />
        </div>
        <div className="col col-md-10 col-8">
          <div className="rate-content">
            <h5 className="user-rate">{rate.userName}</h5>
            <h5 className="user-rate">{formatDate(rateTime)}</h5>
            
            <ReactStars
              count={rate.rating}
              edit={false}
              size={24}
              color={"#b1b148"}
            />
            <p>{rate.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}