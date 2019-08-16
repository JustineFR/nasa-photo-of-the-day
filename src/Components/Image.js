import React from "react";
import styled from 'styled-components';

const ImgStyle = styled.img`
    width: 60%;
    border-radius: 15px;
`;

function Image(props) {
    // console.log(props)
    return(
        <div>
            <ImgStyle 
            src={props.url} alt="photo of the day by nasa">
            </ImgStyle>
        </div>
    )
}

export default Image;


