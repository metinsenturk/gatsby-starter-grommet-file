import React, { Component } from 'react'
import {  Markdown, Anchor } from 'grommet'
import { Box, Heading, Text, } from 'grommet'
import { Previous } from "grommet-icons"
import { InternalLink } from '../components/internal/internal'

class Success extends Component {
    constructor(props){
        super(props);
        this.successRef = React.createRef()
        this.state = {
            status: null,
            error: null,
            name: null,
            select: null,
            email: null,
            message: null
        }

        var { status, name, select, email, message } = this.state
        const CONTENT = `\`\`\`json \n${JSON.stringify({ status, name, select, email, message }, null, 2)}\`\`\``

        return (
            <Box basis="large" fill={true}>
                <Box pad="xsmall" justify="between" align="end" direction="row">
                    <Text color="status-ok" >Success!</Text>
                    <InternalLink to='/'>
                        <Anchor as="span" icon={<Previous />} label="Home" />
                    </InternalLink>
                </Box>
                <Box elevation="small" pad="medium" gap="medium" >
                    <Heading >Message received!</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Markdown>
                        {CONTENT}
                    </Markdown>
                </Box>
            </Box>
        )
    }
}

export default Success;