import React, { useEffect } from 'react';
import { Container, Button, Heading, Flex } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';


export default props => {

    useEffect(() => {
        netlifyIdentity.init({});
    });

    return (
        <Container>
            <Flex sx={{ flexDirection: "column", padding: 3 }}>

                <Heading as="h1">Todos App</Heading>
                <Button sx={{ marginTop: 3, color: "Black", fontWeight: "bold", fontSize: 22 }}
                    onClick={() => netlifyIdentity.open()}
                >
                    Login
                </Button>
            </Flex>
        </Container>
    );
}