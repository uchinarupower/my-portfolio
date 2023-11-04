import React from 'react';
import './Affiliations.css';

function Affiliations() {
  const affiliations = [
    '東京工業大学 大上研',
    'ロボット技術研究会 Aqua研',
    'Aqua-Frontech'
  ];

  return (
    <section className="affiliations">
      <h2>Affiliations</h2>
      {affiliations.map((affiliation, index) => (
        <div key={index} className="affiliation-item">{affiliation}</div>
      ))}
    </section>
  );
}

export default Affiliations;
