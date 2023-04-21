import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
  width: 100%
`;

const Container = styled.div`
  position: absolute;
width: 80%;
margin: auto;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`

  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: justify;
  padding-left: 10px;
  padding-bottom: 0px;
  paddinh-top: 0px;
  cursor: pointer;
  h1 {
 
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
    padding-top: 50px;
  }
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
    <IconContext.Provider value={{ size: '25px' }}>
      <AccordionSection>
        <Container style={{backgroundColor: "#fff"}}>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 style={{color: "#000"}}>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
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