import React, { useState } from 'react';

const Tour = ({tour, onDelete}) => {
  const toggleResult = () =>{
    console.log('toggle this');
    setReadMore(!readMore);
  }
  const [readMore, setReadMore] = useState(false)
   return (
    <main>
      <article className="single-tour">
        <img src={tour.image} alt={tour.name}/>
        <footer>
        <div className='tour-info'>
        <h4>{tour.name}</h4>
        <h5>$ {tour.price}</h5>
        </div>
        <div>
          <p>{readMore ? tour.info : tour.info.substring(0,200)}</p>
          <button onClick={toggleResult} >{readMore ? 'Show Less' : 'Read More' }</button>
        </div>
        <button onClick={()=> {onDelete(tour.id)}} className="delete-btn">Not Interested</button>
        </footer>
      </article> 
    </main>
  )
};

export default Tour;
