import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire contact :", formData);
    alert("Merci ! Votre message a bien été envoyé ✅");
    setFormData({ nom: "", email: "", telephone: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contactez-nous</h2>
      <div className="contact-container">
        
        {/* Infos rapides */}
        <div className="contact-info">
          <h3>📞 Nos coordonnées</h3>
          <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
          <p><strong>Email :</strong> contact@entreprise-btp.fr</p>
          <p><strong>Adresse :</strong> 123 Rue du BTP, 75000 Paris</p>
        </div>

        {/* Formulaire */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Votre téléphone"
            value={formData.telephone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}