import React, {useState} from 'react'

export default function Pizza({pizza}) {
  const [quantity, setquantity] = useState(1)
  const [ variant,setvariant ] = useState('small')
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} className="img-fluid" style={{height:'200px', width:'200px'}}/>
      <div className="flex-container">
        <div className='w-100'>
            <p>variants</p>
            <select value={variant} onChange={(e)=>{setvariant(e.target.value)}}>
            {pizza.variants.map(variant=>{
              return <option value={variant}>{variant}</option>
            })}
            </select>
        </div>

        <div className='w-100'>
            <p>Quantity</p>
            <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
              {[...Array(10).keys()].map((x, i)=>{
                 return <option value={i+1}>{i+1}</option>
              })}
            </select>
        </div>

      </div>
      <div className="flex-container"></div>
      <div>
        <h1>Price:  {pizza.prices[0][variant]*quantity}</h1>

      </div>
      <div>
        
      </div>
    </div>
  )
}
