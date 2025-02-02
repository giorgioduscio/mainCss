import paragraph from './js/paragraph.js'
import inputType from './js/inputType.js'
import mapper from './js/mapper.js';


document.title ='Esperimenti'
const utenti={
  primoUtente:{ nome:'mario', mancino:false, age:20, data:'10-10-1242' },
  secondo_utente:{ nome:'carlo', mancino:true, age:56, data:'14-06-1542' },
}

console.log('mapper', mapper(utenti))

document.body.innerHTML =`
<article>
  <h1>${ document.title }</h1>

  <main id="paragraph">
    <h3>Paragraph</h3>
    ${Object.keys(utenti).map(ukey=>`
      <p>${ paragraph(ukey) }</p>
      ${Object.keys(utenti[ukey]).map(fkey=>`
        <input value="${utenti[ukey][fkey]}" type="${inputType(utenti[ukey][fkey], fkey)}" />
      `).join('')}
    `).join('')}
  </main>

  <form>
    <h3>Form</h3>
  </form>



</article>`