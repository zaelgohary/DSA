function hash(key, arrLength) {
  let total = 0
  const PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    value = key[i].charCodeAt(0) - 96
    total = (total * PRIME + value) % arrLength
  }
  console.log(total);
  return total
}

hash("yellow", 10)
