import { SHELFS } from './constants'

class Shelfs {
  names = SHELFS
  getAsValue = () => {
    const names = this.names
    return names.map(name => {
      const nameSplitted = name.split(' ')
      return nameSplitted.map((word, index) => index > 0 ? word : word.toLowerCase()).join('')
    })
  }
  getNames = () => this.names
  getValue = name => {
    const indexName = this.names.indexOf(name)
    return indexName >= 0 ? this.getAsValue()[indexName] : ''
  }
}

export {
  Shelfs
}
