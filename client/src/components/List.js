import React from 'react'

const List = ({text,remove}) => {
  return (
    <div className='list'>
    <div className="items">
      <h5>{text}</h5>
      </div>
      <div className='icons'>
      <button type="submit"  style={{height : 40}} class="btn btn-outline-dark">Purchased</button>
      <i onClick={remove} class="bi bi-x-square"></i>
      </div> 
    </div>
  )
}

export default List