import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  const addToCart = (item) => {
    console.log('Added to cart:', item);
    // yaha ap apna cart logic likh sakte ho
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const serverResponse = await fetch('https://fakestoreapi.com/products');
        const jsonData = await serverResponse.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h2>Data is not available</h2>
      ) : (
        data.map((ele) => (
          <div
            key={ele.id}
            style={{ border: '2px solid green', padding: '10px', margin: '10px 0' }}
          >
            <img src={ele.image} alt={ele.title} height={100} width={100} />
            <h2>{ele.title}</h2>
            <h2>${ele.price}</h2>
            <h4>{ele.description}</h4>
            <h3>{ele.category}</h3>
            <button onClick={() => addToCart(ele)}>Add to cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
