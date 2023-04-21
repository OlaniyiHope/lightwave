import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./Ban.css"
const AccordionSection = styled.div`
 
`;

const Container = styled.div`
 
`;

const Wrap = styled.div`

`;

const Dropdown = styled.div`
  
  color: #000;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
 
  border-bottom: 1px solid #fff;
  
  p {
    font-size: 2rem;
  }
`;

const Ban = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ size: '15px' }}>
      <AccordionSection className='accord'>
        <Container style={{backgroundColor: "#fff"}} className='con'>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index} className='wrap'>
                  <h1 style={{color: "#000"}}>{item.question}</h1>
                  <span style={{color: "#000"}}> {clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown className='drop'>
                    <p style={{color: "#000"}}>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Ban;