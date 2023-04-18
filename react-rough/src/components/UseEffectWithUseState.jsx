import React, { useEffect, useState } from 'react';
export default function App() {
  const [product, setproduct] = useState([])
  const [display, setdisplay] = useState(false)
  const [selectedProduct, setselectedProduct] = useState(null)

  useEffect(() => {
    async function getApiData() {
      const result = await fetch(`https://hub.dummyapis.com/products?noofRecords=5&idStarts=1001&currency=usd`)
      const response = await result.json();
      setproduct(response)
      console.log(response)
    }
    getApiData();
  }, [])

  const showDetails = (product) => {
    setselectedProduct(product)
  }

  const hideDetails = () => {
    setselectedProduct(null)

  }

  return (
    <div>
      <button onClick={() => {
        setdisplay(true)
      }}>CLick to View products</button>
      <div>
        {display && (product.map((item) => (<button key={item.id} onClick={()=>showDetails(item)}>{item.name}</button>)))}
      </div>
      <div>
        {selectedProduct && (<div>
          <h4>{selectedProduct.name}</h4>
          <h5>{selectedProduct.price}</h5>
          <button onClick={hideDetails}>hide</button>
        </div>)}
      </div>
    </div>
  )
}
