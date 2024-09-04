import React from 'react'

const TableRow = (props) => {
    console.log(props.coin)
    const {id, symbol ,name,image, current_price, market_cap, high_24h, low_24h}=props.coin
  return (
   <tr id={id}>
    <td>{name}</td>
    <td>{symbol}</td>
    <td><img src={image} alt={name}/></td>
    <td>{current_price}</td>
    <td>{market_cap}</td>
    <td>{high_24h}</td>
    <td>{low_24h}</td>
    

   </tr>
  )
}

export default TableRow