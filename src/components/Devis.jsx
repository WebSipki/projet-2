import React, { useState } from 'react'


export default function Devis(){
const [status, setStatus] = useState(null)


async function handleSubmit(e){
e.preventDefault()
const form = new FormData(e.target)
// Exemple simple: envoi vers Formspree ou API backend.
// Ici on montre comment envoyer vers Formspree (remplace YOUR_ID par l'endpoint)
try{
setStatus('sending')
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
method: 'POST',
body: form,
headers: { 'Accept': 'application/json' }
})
if(res.ok) setStatus('success')
else setStatus('error')
}catch(err){
console.error(err)
setStatus('error')
}
}


return (
<section id="devis" className="devis">
<div className="container">
<h2>Demander un Devis</h2>
<form onSubmit={handleSubmit}>
<input name="name" type="text" placeholder="Nom et prénom" required />
<input name="email" type="email" placeholder="Email" required />
<input name="phone" type="tel" placeholder="Téléphone" required />
<select name="type">
<option value="construction">Construction</option>
<option value="renovation">Rénovation</option>
<option value="electricite">Électricité</option>
<option value="plomberie">Plomberie</option>
</select>
<textarea name="message" placeholder="Description du projet" required />
<button type="submit">Envoyer ma demande</button>
</form>


{status === 'sending' && <p style={{textAlign:'center',marginTop:12}}>Envoi en cours…</p>}
{status === 'success' && <p style={{textAlign:'center',marginTop:12,color:'green'}}>Merci — demande envoyée !</p>}
{status === 'error' && <p style={{textAlign:'center',marginTop:12,color:'red'}}>Erreur lors de l'envoi. Réessaie ou contacte-nous par téléphone.</p>}
</div>
</section>
)
}