import { BsFillStarFill } from "react-icons/bs";
import './Ratings.css'
import { useState } from "react";

function Ratings() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (index) => {
        setRating(index + 1)
    }

    const handleMouseMove = (index) => {
        setHover(index + 1)
    }

    const handleMouseLeave = () => {
        setHover(0)
    }
  return (
    <div className="container-fluid vw-100 vh-100 bg-light d-flex justify-content-center align-items-center">
      <div className="border border-success rounded-pill py-2 px-5">
        <h5>Ratings</h5>
              {Array.from({ length: 10 }).map((_, index) => {
                  return (
                    <>
                      <BsFillStarFill
                        key={index}
                        starPosition={index + 1}
                        className="inactive"
                        onClick={ handleClick }
                        onMouseMove={ handleMouseMove }
                        onMouseLeave={ handleMouseLeave }
                      />
                    </>
                  );
              })}
      </div>
    </div>
  );
}

export default Ratings;
