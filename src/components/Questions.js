import React, { useEffect, useState } from 'react';
import data from './Data';
import { GoPlusSmall } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

const Questions = () => {
  return (
    <article className='question-card'>
      <div className='headline'>
        <h1>Questions And Answers About Login</h1>
      </div>
      <section>
        {data.map((item) => {
          return <Answer key={item.id} {...item} />;
        })}
      </section>
    </article>
  );
};

const Answer = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='question'>
      <div className='question-and-buttons'>
        <h3>{title}</h3>
        <div className='btn-container'>
          {show ? (
            <button onClick={() => setShow(!show)}>
              <FiMinus />
            </button>
          ) : (
            <button onClick={() => setShow(!show)}>
              <GoPlusSmall />
            </button>
          )}
        </div>
      </div>
      {show ? <p className='info'>{info}</p> : ''}
    </div>
  );
};

export default Questions;
