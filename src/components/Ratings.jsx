import { BsStar } from "react-icons/bs";
import './Ratings.css'

function Ratings() {
    const handleClick = (index) => {
        console.log(index)
    }
  return (
    <div className="container-fluid vw-100 vh-100 bg-light d-flex justify-content-center align-items-center">
      <div className="border border-success rounded-pill py-2 px-5">
        <h5>Ratings</h5>
              {Array.from({ length: 10 }).map((_, index) => {
                  return (
                    <>
                          <BsStar
                              key={index}
                              className="star"
                              onClick={() => handleClick(index)}
                          />
                    </>
                  );
              })}
      </div>
    </div>
  );
}

export default Ratings;
