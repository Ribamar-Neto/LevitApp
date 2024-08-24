import React from 'react';

const Ministries = () => {
  const ministries = [
    { icon: '🎵', name: 'Música' },
    { icon: '📸', name: 'Mídia' },
    { icon: '📖', name: 'Pregação' },
    { icon: '😊', name: 'Infantil' },
    { icon: '⛪', name: 'Diaconato' },
    { icon: '➕', name: 'Outros' }
  ];

  return (
    <div className="ministries-container">
      {ministries.map((ministry, index) => (
        <div key={index} className="ministry-card">
          <div className="ministry-icon">{ministry.icon}</div>
          <div className="ministry-name">{ministry.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Ministries;
