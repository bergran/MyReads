import React from 'react'
import { Shelfs } from './shelfObject'

const SelectShelf = (props) => {
  /**
  * this Component is used to get all shelfs and show to the user into options
  * values
  * param shelfs: (Array) contains all shelfs available
  * param selectShelf: (funct) is called when an option is changed by user
  **/
  const { shelfs, selectShelf } = props
  const shelfsOptions = new Shelfs()
  return (<select onChange={(e) => selectShelf(e.target.value)}>
    <option value="none" disabled>Move to...</option>
    {
      shelfsOptions.names.map((name, index) => (
        <option key={index} value={shelfsOptions.getValue(name)}>{name}</option>
      ))
    }
  </select>)
}

export { SelectShelf }
