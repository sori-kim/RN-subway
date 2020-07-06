import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';


function Temp(): React.ReactElement {
    return (
        <Container>
         <Text> This is Sidebar! </Text>
        </Container>
    )
  }
  
  export default Temp;

  const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;