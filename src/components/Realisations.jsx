import React from 'react'


const projets = ['/images/projet1.jpg','/images/projet2.jpg','/images/projet3.jpg','/images/projet4.jpg']


export default function Realisations(){
return (
<section id="realisations" className="realisations">
<div className="container">
<h2>Nos Réalisations</h2>
<div className="gallery">
{projets.map((p, i) => (
<img key={i} src={p} alt={`Projet ${i+1}`} />
))}
</div>
</div>
</section>
)
}