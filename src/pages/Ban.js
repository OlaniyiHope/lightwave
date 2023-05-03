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
    <IconContext.Provider value={{ size: '10px' }}>
      <AccordionSection className='accord'>
      
        <Container style={{backgroundColor: "#fff"}} className='con'>
        <h5 class="display-2 display-2--light" style={{color: "black", textAlign: "center", marginBottom: "30px", fontSize: "30px", paddingTop: "20px"}}>Frequently asked question</h5>

          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index} className='wrap'>
                  <h1 style={{color: "#000", }} className='hope'>{item.question}</h1>
                  <span style={{color: "#000"}}> {clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown className="drop">
                    <p style={{color: "#000"}}>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  //   <div>
    
  //   <AccordionSection className='accord'>
  //      <Container style={{backgroundColor: "#fff"}} className='con'>
  //   {Data.map((section, index) => (
  //     <Accordion  key={index} section={section}  />
  //   ))}
  //   </Container>
  //     </AccordionSection>
  // </div>
  );
};

export default Ban;