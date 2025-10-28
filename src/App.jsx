import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Prestations from './components/Prestations'
import Realisations from './components/Realisations'
import Avis from './components/Avis'
import Certifications from './components/Certifications'
import Devis from './components/Devis'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Localisation from './components/Localisation'


export default function App(){
// smooth scroll to hash when location changes (useful for anchor links)
const { hash } = useLocation()
useEffect(() => {
if(hash){
const el = document.querySelector(hash)
if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
} else {
window.scrollTo({ top: 0, behavior: 'smooth' })
}
}, [hash])


return (
<div className="app">
<Header />
<Routes>
<Route path="/" element={<Home />} />
{/* tu peux ajouter d'autres routes ici si besoin */}
</Routes>
<Localisation />
<Footer />
</div>
)
}


function Home(){
return (
<main>
<Hero />
<Prestations />
<Realisations />
<Avis />
<Certifications />
<Devis />
<Contact />
</main>
)
}
