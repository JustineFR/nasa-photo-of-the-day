import React from "react";
import NasaImage from "./Image";
import styled from 'styled-components';

const Expl = styled.div `
  color: black;
  width: 500px;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  border: 1.5px solid #c72223;
`;



function NasaCard(props) {
  // console.log(props)

    return (
      <div>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
       
        
          <NasaImage url={props.url} />
          
          <Expl>
            <p>{props.explanation}</p>
          </Expl>
        

      </div>
    )
    
}

export default NasaCard;
