import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
return (
<header>
<div className="container header-inner">
<div style={{display:'flex',alignItems:'center',gap:12}}>
<div className="logo">BTP Expert</div>
<div style={{fontSize:12,opacity:0.9}}>Construction & Rénovation</div>
</div>


<nav>
<ul>
<li><Link to="/">Accueil</Link></li>
<li><a href="#prestations">Prestations</a></li>
<li><a href="#realisations">Réalisations</a></li>
<li><a href="#avis">Avis</a></li>
<li><a href="#devis">Devis</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>


<a className="btn-header" href="#devis">Demander un devis</a>
</div>
</header>
)
}