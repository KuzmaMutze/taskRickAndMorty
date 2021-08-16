import React from 'react';

type PropsType = {
  status: string;
  name: string;
  species: string;
  img: string;
};
export const Card: React.FC<PropsType> = ({ status, name, species, img }) => {
  return (
    <div className="card">
      <img width="175" height="175" src={img} alt="" />
      <div className="info">
        <div>Name: {name}</div>
        <div>Status: {status}</div>
        <div>Spelies: {species}</div>
      </div>
    </div>
  );
};
