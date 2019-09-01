import React from 'react'
import { Box, Anchor } from "grommet"
import { InternalLink } from '../internal/internal'
import { Previous, Next } from "grommet-icons"

const PreviousNext = (props) => {
    const pageContext = props.pageContext;
    
    return (
        <Box pad={{ vertical: "small", horizontal: "small" }} justify="between" align="center" direction="row">
            {pageContext.previous ? (
                <InternalLink to={`${props.pathname}${pageContext.previous.fields.slug}`}>                    
                    <Anchor as="span" icon={<Previous />} label={`${pageContext.previous.fields.slug}`} />
                </InternalLink>
            ) : (<></>)}
            {pageContext.next ? (
                <InternalLink to={`${props.pathname}${pageContext.next.fields.slug}`}>
                    <Anchor as="span" icon={<Next />} label={`${pageContext.next.fields.slug}`} />
                </InternalLink>
            ) : (<></>)}
        </Box>
    )
}

export default PreviousNext;