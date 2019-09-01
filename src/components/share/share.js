import React from 'react'
import PropTypes from 'prop-types'
import { Box, Anchor, Text } from "grommet"
import { Facebook, Twitter, Linkedin, Reddit } from "grommet-icons"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, RedditShareButton } from 'react-share'

// eslint-disable-next-line
import { StylelessLink } from '../internal/internal'

const ShareVia = (props) => {
    const { url, title, excerpt, hashtags, via } = props;
    let tags = hashtags.length ? hashtags : [via,]
    return (
        <Box direction="row" align="center" alignContent="center">
            <Text>Share via</Text>
            <FacebookShareButton url={url} quote={excerpt} hashtag={`#${tags[0]}`}>
                <Anchor as="span" icon={<Facebook />} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title} via={via.split('@').join('')} hashtags={tags}>
                <Anchor as="span" icon={<Twitter />} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={title} description={excerpt}>
                <Anchor as="span" icon={<Linkedin />} />
            </LinkedinShareButton>
            <RedditShareButton url={url} title={title}>
                <Anchor as="span" icon={<Reddit />} />
            </RedditShareButton>
        </Box>
    )
}

export default ShareVia;

ShareVia.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    hashtags: PropTypes.array,
    via: PropTypes.string
};