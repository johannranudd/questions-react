import React from 'react';
import data from './Data';
import { GoPlusSmall } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

const Questions = () => {
  //   const { id, title, info } = data;
  return (
    <article className='question-card'>
      <div className='headline'>
        <h1>Questions And Answers About Login</h1>
      </div>
      {data.map((item) => {
        const { id, title, info } = item;
        return (
          <div key={id} className='question'>
            <div className='question-and-buttons'>
              <h3>{title}</h3>
              <div className='btn-container'>
                <button>
                  <GoPlusSmall />
                </button>
                <button>
                  <FiMinus />
                </button>
              </div>
            </div>
            <p className='info'>{info}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Questions;
