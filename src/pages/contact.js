import React, { Component } from 'react'
import { FormField, TextInput, TextArea, Button, Markdown, Anchor } from 'grommet'
import { Box, Select, Heading, Text, Form, } from 'grommet'
import { Previous } from "grommet-icons"
import ReCaptcha from "react-google-recaptcha"
import SEO from '../components/seo/seo';
import { InternalLink } from '../components/internal/internal'

const axios = require('axios');
const qs = require('query-string');

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "ready", /* ready || success || failure */
            error: "",
            recaptcha: null,
            expired: false
        }
    }

    handleRecaptcha = (value) => {
        this.setState({recaptcha: value})
        if (value === null) {
            this.setState({ expired: true })
        };
    }

    onSubmit = (event) => {
        event.preventDefault(); 
        if (this.state.recaptcha !== null) {
            const form = event.target

            const axiosOptions = {
                url: form.getAttribute("action"),
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                data: qs.stringify({
                    "form-name" : form.getAttribute("name"),
                    "g-recaptcha-response" : this.state.recaptcha,
                    ...event.value
                }),
            }
            
            axios(axiosOptions)
                .then(response => {
                    this.setState({
                        status: "success",
                        ...qs.parse(response.config.data)
                    })
                })
                .catch(error => {
                    console.log(error)
                    this.setState({
                        status: "failure",
                    })
                })
        } 
        else {
            this.setState({
                error: "recaptcha failed.",
                status: "failure",
            })
        }
    }

    render() {
        const failure = () => {
            var { status, error } = this.state
            const CONTENT = `\`\`\`js\n${JSON.stringify({ status, error }, null, 2)}\`\`\``
            return (
                <Box basis="large" fill={true}>
                    <Box pad="xsmall" justify="between" align="end" direction="row">
                        <Text color="status-error" >Failure!</Text>
                        <InternalLink to='/'>
                            <Anchor as="span" icon={<Previous />} label="Home" />
                        </InternalLink>
                    </Box>
                    <Box elevation="small" pad="medium" gap="medium">
                        <Heading>Something went wrong.</Heading>
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

        const success = () => {
            var { status, fullname, reason, email, message } = this.state
            const CONTENT = `\`\`\`json \n${JSON.stringify({ status, fullname, reason, email, message }, null, 2)}\`\`\``

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

        const ready = () => {
            // eslint-disable-next-line
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const reasonOptions = ['Hire', 'Discussion', 'Thanks', 'Complaint', 'No Reason']
            return (
                <Box elevation="small" pad="medium" gap="medium" fill={true}>
                    <Heading>Contact with me.</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Form
                        onSubmit={this.onSubmit}
                        action="/contact/"
                        name="ContactForm"
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        data-netlify-honeypot="bot-field"
                        >
                        
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="ContactForm" />
                        <FormField name="fullname" label="Full Name" component={TextInput} placeholder="John Applessed" required={true} />
                        <FormField name="email" label="Email" component={TextInput} placeholder="john@apple.com" required={true} validate={{ regexp: emailRegex, message: "please provide an email." }} />
                        <FormField name="reason" label="Why?" component={Select} value={reasonOptions[2]} options={reasonOptions} />
                        <FormField name="message" label="Message" component={TextArea} placeholder="type here" rows="5" required={true} />
                        <ReCaptcha sitekey={process.env.GATSBY_RECAPTCHA_KEY} onChange={this.handleRecaptcha} theme="dark"/>
                        <Box pad={{ vertical: 'medium' }} direction="row" justify="end">
                            <Button label="Send" type="submit" primary={true}></Button>
                        </Box>
                    </Form>
                </Box>
            )
        }

        let currentComponent = null
        switch (this.state.status) {
            case "failure":
                currentComponent = failure()
                break;
            case "success":
                currentComponent = success()
                break;
            default:
                currentComponent = ready()
                break;
        }

        return (
            <>
                <SEO
                    pathname="/contact/"
                    title="Contact with me."
                    desc=""
                />
                {currentComponent}
            </>
        )

    }
}

export default Contact