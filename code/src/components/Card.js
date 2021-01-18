import React from 'react';
import '../styles/card.css';

const COLORS = {
  global: '#fb542b',
  active: '#3F51B5',
  recover: '#32970a',
  death: '#d2173b',
};

const ICONS = {
  global: '/1.png',
  recover: '/2.png',
  active : '/3.png',
  death: '/4.png',
  today:'/5.png',
};

const getStyle = variant => {
  return variant
    ? {
        color: COLORS[variant] || COLORS.dark,
        // borderColor:COLORS[variant] || COLORS.dark,
      }
    : {};
};

function Card({ title, count, total, variant }) {
  const percent = total ? ((count / total) * 100).toFixed(2) : 0;

  return (
    <div className="card" style={getStyle(variant)}>
      <h3 className="card-title">{title}</h3>
      <img src={process.env.PUBLIC_URL + ICONS[variant]} alt="covid" width="30" />
      <div className="card-info">
        <h2 className="count">{count.toLocaleString()}</h2>
        {percent !== '100.00' && <h4 className="count">{`${percent}%`}</h4>}
      </div>
    </div>
  );
}

export default Card;
