import { BsFillStarFill } from "react-icons/bs";
import './Ratings.css'
import { useState } from "react";

function Ratings() {
    const [rating, setRating] = useState(-1)
    const [hover, setHover] = useState(0)

    const handleClick = (index) => {
        setRating(index)
    }

    const handleMouseMove = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(0)
    }
  return (
    <div className="container-fluid vw-100 vh-100 holder d-flex justify-content-center align-items-center">
      <div className="border border-success rounded-pill py-2 px-5">
        <h5>Ratings</h5>
              {Array.from({ length: 10 }).map((_, index) => {
                  return (
                    <>
                      <BsFillStarFill
                        key={index}
                        className={
                          index <= (hover || rating) ? "active" : "inactive"
                        }
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: "pointer" }}
                        size={40}
                      />
                    </>
                  );
              })}
      </div>
    </div>
  );
}

export default Ratings;
