import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const handlePrevious = (index) => {
    index = index - 1;
    if (index < 0) index = people.length - 1;
    setIndex(index);
  }
  const handleNext = (index) => {
    index = index + 1;
    if (index >=people.length) index = 0;
    setIndex(index);
  }

  return <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={()=>handlePrevious(index)}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={()=>handleNext(index)}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={()=>setIndex(Math.floor(Math.random()*people.length))}>surprise me</button>
  </article>
};

export default Review;
