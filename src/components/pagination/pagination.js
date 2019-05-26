import React from 'react'
import { Box, Anchor } from 'grommet'
import { InternalLink } from '../internal/internal'
const Pagination = (props) => {
    const pageInfo = props.pageInfo
    const pagination = Array.from({ length: pageInfo.pageCount }, (self, i) => (
        <InternalLink key={i} to={`/blog/${i === 0 ? '' : i + 1}`}>
            <Anchor as="span" label={`${i === 0 ? '1' : i + 1}`} />
        </InternalLink>
    ))

    return (
        <Box direction="row" gap="medium" >
            {pagination}
        </Box>
    )
}

export default Pagination;