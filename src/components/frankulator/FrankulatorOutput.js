import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 75px;
  line-height: 45px;
`;

const P = styled.div`
   width: 85%;
   height: 80%;
   background-color: white;
   margin: auto;
   text-align: right;
   font-size: 22px;
   border-radius: 5px;
   border-style: solid;
   border-width: 7px;
   border-color: black;
`;

class FrankulatorOutput extends Component {
  render() {
    return(
      <Div>
        <P>Output Here!</P>
      </Div>
    );
  }
}

export default FrankulatorOutput;
