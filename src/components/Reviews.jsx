import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

const Reviews = () => {
  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedBack] = useState({});
  const [list, setList] = useState([]);

  // Load localStorage (reviews) and sessionStorage (draft)
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("list")) || [];
    const savedDraft = JSON.parse(sessionStorage.getItem("draft")) || {};
    const savedStar = parseInt(sessionStorage.getItem("draftStar")) || 0;

    setList(savedList);
    setFeedBack(savedDraft);
    setStar(savedStar);
  }, []);

  const handleHover = (index) => {
    setHover(index);
    if (star !== 0) {
      setStar(0);
    }
  };

  const handleLeave = (index) => {
    setHover(0);
    setStar(index);
    sessionStorage.setItem("draftStar", index); 
  };

  const handleDown = (index) => {
    setStar(index);
    sessionStorage.setItem("draftStar", index);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFeedback = { ...feedback, [name]: value };
    setFeedBack(updatedFeedback);
    sessionStorage.setItem("draft", JSON.stringify(updatedFeedback)); // 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...list, { ...feedback, star: star, id: Date.now() }];
    setList(newList);
    setFeedBack({});
    setStar(0);

    localStorage.setItem("list", JSON.stringify(newList)); 
    sessionStorage.removeItem("draft");
    sessionStorage.removeItem("draftStar");
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((val) => val.id !== id);
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  return (
    <section className="reviews">
      <div className="container">
        <div className="border rounded-4 p-4">
          <div className="title">
            <h4>BMW 3 Series User Reviews</h4>
          </div>
          <div className="rating-section">
            <form method="post" onSubmit={handleSubmit}>
              {[...Array(5).keys()].map((_, index) => (
                <FaStar
                  key={index}
                  size={20}
                  onMouseOver={() => handleHover(index + 1)}
                  onMouseLeave={() => handleLeave(index + 1)}
                  onMouseDown={() => handleDown(index + 1)}
                  color={
                    hover > index || star > index ? "orangered" : "lightgray"
                  }
                />
              ))}

              <textarea
                id="Message"
                name="message"
                className="form-control my-3"
                placeholder="Provide Feedback"
                value={feedback.message || ""}
                maxLength="50"
                onChange={handleChange}
              ></textarea>
              <button className="btn btn-orange text-white fw-semibold">
                Submit
              </button>
            </form>
          </div>
          <ul className="list-unstyled mt-5">
            <h4>Reviews and Ratings</h4>
            {list.map((val) => (
              <li key={val.id} className="py-3">
                {[...Array(5).keys()].map((_, index) => (
                  <FaStar
                    key={index}
                    size={20}
                    color={val.star > index ? "orangered" : "lightgray"}
                  />
                ))}
                <p className="mt-3 bg-light p-3 rounded-3">{val.message}</p>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(val.id)}
                  >
                    <LuTrash2 size={20} />
                  </button>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
