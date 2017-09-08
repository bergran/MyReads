import React from 'react'

const Select = (props) => {
  const { categories, selectCategorie } = props
  // Refactorize
  return (<select onChange={(e) => selectCategorie(e.target.value)}>
    <option value="none" disabled>Move to...</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>)
}

export { Select }