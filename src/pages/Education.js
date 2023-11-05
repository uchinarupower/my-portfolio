import React from 'react';
import './Education.css';

function Education() {
  const educationList = [
    { year: '2016.4 - 2019.3', school: '東京工業大学附属科学技術高等学校 情報システム分野' },
    { year: '2019.4 - 2023.3', school: '東京工業大学 情報理工学院 情報工学系 学士' },
    { year: '2023.4 - Present', school: '東京工業大学 情報理工学院 情報工学系 知能情報コース 修士' }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <ul className="education-list">
        {educationList.map((edu, index) => (
          <li key={index} className="education-item">
            <span className="education-year">{edu.year}</span>
            <span className="education-school">{edu.school}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
