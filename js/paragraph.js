export default function paragraph(phrase) {
  if(typeof phrase==='string'){
    // underscore
    if (phrase.includes('_')) return phrase[0].toUpperCase() +phrase.slice(1) .replaceAll('_',' ')
      
    // camelcase
    if (!phrase.includes(' ')){
      const spaces = phrase.replace(/([A-Z])/g, ' $1').toLowerCase()
      const primaMaiuscola = spaces.charAt(0).toUpperCase() + spaces.slice(1)
      return primaMaiuscola
    } 
  } return ''
}