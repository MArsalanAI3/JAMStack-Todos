import React from 'react';
import { Container, Button, Heading,Flex } from 'theme-ui';

export default props => (
    <Container>
        <Flex sx={{flexDirection:"column",padding:3}}>

            <Heading as="h1">Todos App</Heading>
            <Button sx={{marginTop:3,color:"Black",fontWeight:"bold",fontSize:22}}
             onClick={()=>alert("Hello World!")}   
            >
                Submited
                </Button>
        </Flex>
    </Container>
);