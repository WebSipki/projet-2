import React from "react";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2 className="certifications-title">Nos certifications</h2>
      <p className="certifications-subtitle">
        Gage de qualité et de fiabilité dans tous nos projets BTP
      </p>

      <div className="certifications-logos">
        <div className="cert-card">
          <img src="/images/qualibat.png" alt="Certification Qualibat" />
          <p>Qualibat</p>
        </div>
        <div className="cert-card">
          <img src="/images/iso9001.png" alt="Certification ISO 9001" />
          <p>ISO 9001</p>
        </div>
        <div className="cert-card">
          <img src="/images/rge.png" alt="Certification RGE" />
          <p>RGE Éco Artisan</p>
        </div>
        <div className="cert-card">
          <img src="/images/iso14001.png" alt="Certification ISO 14001" />
          <p>ISO 14001</p>
        </div>
      </div>
    </section>
  );
}