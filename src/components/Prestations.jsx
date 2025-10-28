import React from "react";
import "./Prestations.css";

export default function Prestations() {
  const services = [
    {
      title: "Construction",
      description: "Réalisation de bâtiments neufs, maisons individuelles et locaux professionnels.",
      icon: "🏗️"
    },
    {
      title: "Rénovation",
      description: "Travaux de rénovation intérieure et extérieure pour moderniser vos espaces.",
      icon: "🔨"
    },
    {
      title: "Gros Œuvre",
      description: "Maçonnerie, fondations, charpentes et travaux de structure.",
      icon: "🚧"
    },
    {
      title: "Aménagement",
      description: "Aménagement extérieur, terrassement, voirie et espaces verts.",
      icon: "🌳"
    }
  ];

  return (
    <section className="prestations" id="prestations">
      <h2 className="prestations-title">Nos Prestations</h2>
      <div className="prestations-container">
        {services.map((service, index) => (
          <div key={index} className="prestation-card">
            <div className="prestation-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}