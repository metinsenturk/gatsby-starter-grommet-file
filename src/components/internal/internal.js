import { Link } from 'gatsby'
import styled from 'styled-components'
import {Anchor} from 'grommet'

// TODO: currently not working. The aim is to remove styling form Anchor. It needs to inherit the color from icon.
const StylelessLink = styled(Anchor)`
    //text-decoration: none;
    color: inherit;
    :visited {
    color: inherit;
    }
`

const InternalLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :visited {
    color: inherit;
    }
`

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover {
    opacity: 0.3;
    text-decoration: none;
    }
`;

export {CardLink, InternalLink, StylelessLink};