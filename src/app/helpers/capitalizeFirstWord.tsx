const capitalizeFirstWord = (str: string) => {
  const words = str.split(' ')
  if (words.length > 0) {
    words[0] = words[0][0].toUpperCase() + words[0].slice(1)
  }
  return words.join(' ')
}

export default capitalizeFirstWord
