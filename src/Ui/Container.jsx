import React from 'react'
const Container = (props) => {
  return(
    <div className='container mx-auto px-2'>{props.children}</div>
    )
}
export default Container;