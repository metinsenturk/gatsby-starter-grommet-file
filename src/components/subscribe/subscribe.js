import React from 'react'
import { Box, Button, Form, FormField, Paragraph, TextInput, Heading } from 'grommet'
import { Send } from 'grommet-icons'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Subscribe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'ready',
            error: '',
            email: ''
        }
    }
    handleChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        }).then(
            this.setState({ status: "success" })
        ).catch(error =>
            this.setState({ status: "failure", error: error })
        );
    }
    render() {
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const failure = () => {
            return (
                <Paragraph color="status-error">
                    Something went wrong. Please inform me by my social links.
                </Paragraph>
            )
        }

        const success = () => {
            return (
                <Paragraph color="status-ok">
                    Success! We will connect soon!
                </Paragraph>
            )
        }

        const ready = () => {
            return (
                <Form name="SubscribeForm" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.onFormSubmit}>
                    <FormField label="Email" help="Provide a valid email address." placeholder="john@apple.com" component={TextInput} required={true} validate={{ regexp: emailRegex, message: "please provide an email." }} onChange={this.handleChange}>
                    </FormField>
                    <Button type="submit" primary={true} label="Send" icon={<Send />} />
                </Form>
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
            <Box>
                <Heading level="4"  margin="0">Subscription Form</Heading>
                <Paragraph>Subscribe to get the latest news and contents.</Paragraph>
                {currentComponent}
            </Box>
        )
    }
}