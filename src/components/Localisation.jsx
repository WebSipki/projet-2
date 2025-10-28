import React from "react";
import "./Localisation.css";

export default function Localisation() {
  return (
    <section className="localisation" id="localisation">
      <h2 className="localisation-title">Nous trouver</h2>
      <div className="localisation-container">

        {/* Carte Google Maps */}
        <div className="localisation-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.337481216028!2d2.294481315675215!3d48.85884407928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf73c8b5f%3A0xa60d3b44b1f5f!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1616779262456!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localisation entreprise"
          ></iframe>
        </div>

        {/* Infos pratiques */}
        <div className="localisation-info">
          <h3>Notre adresse</h3>
          <p>123 Rue du BTP, 75000 Paris</p>

          <h3>Horaires d’ouverture</h3>
          <ul>
            <li>Lundi - Vendredi : 8h - 18h</li>
            <li>Samedi : 9h - 13h</li>
            <li>Dimanche : Fermé</li>
          </ul>

          <h3>Contact</h3>
          <p>Téléphone : 01 23 45 67 89</p>
          <p>Email : contact@entreprise-btp.fr</p>
        </div>
      </div>
    </section>
  );
}