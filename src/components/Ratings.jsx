import { BsStar } from "react-icons/bs";

function Ratings() {
  return (
    <div className="container-fluid vw-100 vh-100 bg-light d-flex justify-content-center align-items-center">
      <div className="border border-success rounded-pill py-2 px-5">
        <h5>Ratings</h5>
        {Array.from({ length: 10 }).map((_, index) => (
          <>
                <BsStar
                    key={index}
                />
          </>
        ))}
      </div>
    </div>
  );
}

export default Ratings;
