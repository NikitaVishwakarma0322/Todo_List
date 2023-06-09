import React from 'react'

const List = (props) => {
  return (
    <div>
        <li className='list-item'>
            {props.item}
            <span className='icons'>
                <i className="fa-solid fa-trash-can"></i>
            </span>
        </li>
    </div>
  )
}

export default List;