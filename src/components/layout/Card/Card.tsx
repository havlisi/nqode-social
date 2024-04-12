import React from 'react';
import classes from './Card.module.scss';

interface CardProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={`${classes['c-card']}`}>
      {title && <h3 className={`${classes['c-card__title']}`}>{title}</h3>}
      <div className={`${classes['c-card__container']}`}>{children}</div>
    </div>
  );
};

export default Card;
