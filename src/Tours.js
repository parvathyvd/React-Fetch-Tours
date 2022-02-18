import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, onDelete }) => {
  return (
    <main>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline">
          {tours.map(tour => {
            return(
              <div key={tour.id}>
                <Tour tour={tour} onDelete={onDelete}/>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
};

export default Tours;
