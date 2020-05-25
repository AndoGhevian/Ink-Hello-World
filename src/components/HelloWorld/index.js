import React, { Component } from 'react';
import { Text, Color, Box } from 'ink';

class helloWorld extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box height={3} justifyContent='space-between' alignItems='center' flexDirection='column' >
                <Color bold blue><Text underline >___Ink Project___</Text></Color>
                <Color bold blue><Text underline >_________</Text></Color>
                <Color bold green>Hello World</Color>
            </Box>
        )
    }
}

export default helloWorld;