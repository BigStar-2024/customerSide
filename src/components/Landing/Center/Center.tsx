import React from 'react';
import { Box, Card, CardMedia, Grid } from "@mui/material";
import centerImage from "../../../Assets/CenterImage.png";
import brand2 from '../../../Assets/brand2.png';




const CenterComponent = () => {



    return (
        <>
            {/* <Box component="span" sx={{ display: 'flex' }}>
                        <img src={centerImage} alt="Website Logo" style={{ minWidth: "400px" }} />
                    </Box> */}
            <Card sx={{ width: '700px' }}>
                <CardMedia
                    component={'img'}
                    image={centerImage}
                    alt='Center Image'
                />
            </Card>
        </>
    )
}

export default CenterComponent;