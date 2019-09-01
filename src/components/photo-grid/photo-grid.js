import React from 'react'
import Img from 'gatsby-image'
import { Box, Grid } from 'grommet'

const PhotoGrid = (props) => {
    let imagesList = props.imagesList;

    let countColumn = 0;
    switch (imagesList.length) {
        case 2:
            countColumn = 2      
            imagesList = imagesList.slice(0, 2)      
            break;
        case 3:
            countColumn = 3
            imagesList = imagesList.slice(0, 3)
            break;
        case 4:
            countColumn = 2
            imagesList = imagesList.slice(0, 4)
            break;
        case 5:
            countColumn = 3
            imagesList = imagesList.slice(0, 6)
            break;
        default:
            countColumn = 3
            imagesList = imagesList.slice(0, 6)
            break;
    }

    return (
        <Grid
            fill={true}
            rows="xsmall"
            columns={{
                count: countColumn,
                size: "auto"
            }}
            gap="xsmall"
        >
            {imagesList.map(({ node }, index) => {
                return <Box key={index}><Img fluid={node.childImageSharp.fluid}></Img></Box>
            })}
        </Grid>
    )
}

export default PhotoGrid;