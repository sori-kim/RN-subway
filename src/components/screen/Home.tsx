import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';


function Home(): React.ReactElement {
  return (
  <Container>
    <Text>This is home!</Text>
  </Container>
  )
}

export default Home;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;
