class HashTable {
  constructor(size = 4){
    this.keyMap = new Array(size)
  }

  _hash(key){
    let total = 0
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value){
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    } 
    this.keyMap[index].push([key, value])
  }

  get(key){
    const index = this._hash(key)
    const list = this.keyMap[index]

    if (!list) {
      return undefined
    }

    if (list.length > 1) {
      for (let item in list) {
        if (list[item].includes(key)) {
          return list[item][1]
        }
      }
    }
    return list[0][1]
  }

  update(key, value){
    const index = this._hash(key)
    const list = this.keyMap[index]
    
    if (!list) {
      return undefined
    }

    if (list.length > 1) {
      for (let item in list) {
        if (list[item].includes(key)) {
          list[item][1] = value
        }
      }
    }
    list[0][1] = value
  }

  delete(key){
    const index = this._hash(key)
    const list = this.keyMap[index]

    if (!list) {
      return undefined
    }

    if (list.length > 1) {
      for (let item in list) {
        if (list[item].includes(key)) {
          return delete list[item]
        }
      }
    }
    return delete this.keyMap[index]
  }


  getKeys(){
    const keys = []
    const list = this.keyMap

    for (let i in list) {
      if (i){
        for (let j in list[i]){
          keys.push(list[i][j][0]);
        }
      }
    }
    return keys
  }

  getValues(){
    const values = []
    const list = this.keyMap

    for (let i in list) {
      if (i) {
        for (let j in list[i]){
          if(!values.includes(list[i][j][1])){
            values.push(list[i][j][1]);
          }
        }
      }
    }
    return values
  }
}

const hashTable = new HashTable()
hashTable.set("pink", "#FFB6C1")
hashTable.set("blue", "#0000FF")
hashTable.set("yellow", "#FFFF00")
hashTable.set("black", "#000000")
hashTable.set("white", "#FFFFFF")
hashTable.set("maroon", "#FFFFFF")
hashTable.get("yellow")
hashTable.update("white", "#nas")
hashTable.getKeys()
hashTable.getValues()