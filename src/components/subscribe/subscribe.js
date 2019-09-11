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
        fetch(event.target.getAttribute('action'), {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": event.target.getAttribute('name'), ...event.value })
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
                <Form 
                    name="SubscribeForm" 
                    method="POST"
                    onSubmit={this.onFormSubmit}
                    action="/blog" 
                    data-netlify="true" 
                    data-netlify-recaptcha="true" 
                    data-netlify-honeypot="bot-field" 
                    >
                    <FormField name="email" label="Email" help="Provide a valid email address." placeholder="john@apple.com" component={TextInput} required={true} validate={{ regexp: emailRegex, message: "please provide an email." }} />
                    <input type="hidden" name="form-name" value="SubscribeForm" />
                    <input type="hidden" name="bot-field" />
                    <div data-netlify-recaptcha="true"></div>
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