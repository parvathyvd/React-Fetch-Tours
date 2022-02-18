import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchTours = async() => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log('result is', tours);
    setLoading(false);
    setTours(tours);

  }

  useEffect(()=>{
     fetchTours();
  },[]) 

  // if(tours.length !== 0){
  //   console.log('not 0');
  //   setTours(tours);
  //   setLoading(false);
  // }


  const deleteTours = (id) => {
    console.log('delete this', id);
    const toursAfterDelete = tours.filter(tour => tour.id !== id);
    setTours(toursAfterDelete);
  }
  if(tours.length === 0){
    return(
    <main>
      <article>
        <p>No tours left</p>
        <button onClick={fetchTours} className='btn'>Fetch Tours</button>
      </article>
    </main>)
  }

  return (
    <main style={{textAlign: 'center', margin: '0 auto'}}>
        <h2>Tours Project</h2>
        {loading && <Loading />}
        <Tours tours = {tours} onDelete={deleteTours}/>
    </main>
  )
}

export default App
