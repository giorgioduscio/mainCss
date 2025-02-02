export interface SmartField{
  value:string |number |boolean
  type:"text" |"number" |"checkbox" |"select" |"search" |"tel" |"date" |"textarea" |"email" |"password"
  message:string

  required?:true
  maxLength?:number
  minLength?:number
  pattern?:RegExp

  touched?:boolean
  valid?:boolean
}

// PER OGNI CAMPO, FILTRA TUTTI I CRITERI DI VALIDAZIONE E VALUTA SE E' VALIDO
export function buildSmartForm(form:{[k:string]:SmartField}){
  let newForm :typeof form & {valid?:boolean} =form
  delete newForm.valid
  let formIsValid=true

  Object.entries(form).forEach(entrie=>{
    let key =entrie[0]
    let field =entrie[1]
    delete field.valid
    let isValid =validateField(field)
    // SE ALMENO UN CAMPO E FALSO, RENDE INVALIDO TUTTO IL FORM
    newForm[key].valid =isValid
    if(!isValid) formIsValid =false
  })

  // INFINE ASSEGNA UN CAMPO BOOLEANO AL FORM
  newForm['valid'] =formIsValid
  return newForm
}


function validateField(field: SmartField): boolean {
  // IL CAMPO E RICHIESTO MA RISULTA VUOTO
  if (field.required && !field.value) return false

  if(typeof field.value==='string'){
    // IL CAMPO E' RICHIESTO ED E' UNA EMAIL, MA NON INCLUDE @
    if (field.required && field.type==='email' && !field.value.includes('@')) return false
    // IL VALORE SUPERA LA LUNGHEZZA MINIMA
    if (field.minLength && field.value.toString().length < field.minLength) return false
    // IL VALORE SUPERA LA LUNGHEZZA MASSIMA
    if (field.maxLength && field.value.toString().length > field.maxLength) return false
    // Non rispetta il pattern
    if (field.pattern && !field.pattern.test(field.value)) return false
  }
  // IL VALORE RISPETTA TUTTI I CRITERI
  return true
}