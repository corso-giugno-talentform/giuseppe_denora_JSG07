/* eserc 5
creare una tabella dinamicamente.
<table id="tabella-utenti">
<thead>
<tr>
<th>Nome</th>
<th>Cognome</th>
<th>Email</th>
<th>Eta</th>

</tr>
</thead>
</table>
const utenti=[
    { nome :"mario", email:"mario@gmail" , citta: Roma},
     { nome :"gigio", email:"gigio@gmail" , citta:Milano},
      { nome :"lollo", email:"lollo@gmail" , citta:Napoli}
]


*/

const div = document.querySelector("div");

const utenti = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario@email.com', citta: 'Roma' },
    { nome: 'Laura', cognome: 'Bianchi', email: 'laura@email.com', citta: 'Milano' },
    { nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe@email.com', citta: 'Napoli' }
];


/* lista.innerHTML=htmlElements;

const htmlElements2= utenti.map(utente=>
    `<li>
    <span> ${utente.nome} - email: ${utente.email}</span>
    </li>`
).join(" ")
 */

function creaTabella(divHooked) {

    let intestazione = `<table id="tabella-utenti">
                          <thead>
                             <tr>
                                <th>Nome</th>
                                <th>Cognome</th>
                                <th>Email</th>
                                 <th>citta</th>

                            </tr>
                          </thead>
                          <tbody></tbody> `;

    intestazione += utenti.map(utente => `
        <tr>
                          <td>${utente.nome} </td>
                          <td>${utente.cognome} </td>
                          <td>${utente.email} </td>
                          <td>${utente.citta} </td>
                          </tr>

                   `).join("");
    //chiudo la tabella

    intestazione += `  
        </tbody>
        </table>`;

    //lo aggangio al div
    divHooked.innerHTML = intestazione;


}


creaTabella(div);