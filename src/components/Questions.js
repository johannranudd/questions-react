import React, { useState } from 'react';
import data from './Data';
import { GoPlusSmall } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

const Questions = () => {
  const [show, setShow] = useState(false);

  const showContent = (id) => {
    const filtered = data.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    console.log(filtered);
    // setShow((prev) => {
    //   const newShow = prev;
    //   console.log(newShow);
    //   return !newShow;
    // });
  };
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
                  <FiMinus />
                </button>
                <button onClick={() => showContent(id)}>
                  <GoPlusSmall />
                </button>
              </div>
            </div>
            {show ? <p className='info'>{info}</p> : ''}
          </div>
        );
      })}
    </article>
  );
};

export default Questions;
