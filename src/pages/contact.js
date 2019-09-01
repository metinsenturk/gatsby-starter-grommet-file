import React, { Component } from 'react'
import { FormField, TextInput, TextArea, Button, Markdown, Anchor } from 'grommet'
import { Box, Select, Heading, Text, Form, } from 'grommet'
import { Previous } from "grommet-icons"
import SEO from '../components/seo/seo';
import { InternalLink } from '../components/internal/internal'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

/**
 * SELF NOTE: 
 * Grommet from has its own state where it outputs the form values in Form's onSubmit value. 
 * Here, I implemented my own, which I believe slows down the page. 
 */

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "ready", /* ready || success || failure */
            error: "",
            name: "",
            select: "Discussion",
            email: "",
            message: ""
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onSelectChange = (event) => {
        this.setState({ select: event.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    onSubmit = (event) => {
        //console.log(event)
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(this.setState({ status: "success" }))
            .catch(error => this.setState({ status: "failure", error: error }));
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

        const ready = () => {
            // eslint-disable-next-line
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const selectOptions = ['Hire', 'Discussion', 'Thanks', 'Complaint', 'No Reason']
            return (
                <Box elevation="small" pad="medium" gap="medium" fill={true}>
                    <Heading>Contact with me.</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Form name="contactForm" method="post" onSubmit={this.onSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                        {/* You still need to add the hidden input with the form name to your JSX form */}
                        <input type="hidden" name="form-name" value="contact" />
                        <FormField name="name" label="Full Name" component={TextInput} placeholder="John Applessed" required={true} onChange={this.onNameChange} />
                        <FormField name="email" label="Email" component={TextInput} placeholder="john@apple.com" required={true} validate={{ regexp: emailRegex, message: "please provide an email." }} onChange={this.onEmailChange} />
                        <FormField name="reason" label="Why?" component={Select} value={this.state.select} options={selectOptions} onChange={this.onSelectChange} />
                        <FormField name="message" label="Message" component={TextArea} placeholder="type here" rows="5" required={true} onChange={this.onMessageChange} />
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