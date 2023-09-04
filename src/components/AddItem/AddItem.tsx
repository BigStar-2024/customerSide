import React from 'react'
import Carousel from './Carousel'
import Add from '@mui/icons-material/Add'
import { Grid, Stack, IconButton, Typography, Divider } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AddItem = () => {

    const addNumber = 0;

    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <>
            <Grid container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={12} md={6}>
                        <Carousel />
                    </Grid>
                    <Grid item container xs={12} md={6}>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h6" component="div" whiteSpace='pre-wrap'>
                                    Meat Lovers
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack direction={"row"}>
                                    <IconButton>
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>
                                    <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                        {addNumber}
                                    </Typography>
                                    <IconButton>
                                        <ControlPointIcon />
                                    </IconButton>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                Description
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                Meat Lovers is a pizza culinary which contains sliced beef sausage
                                toppings, minced beef, beef burger, chicken sausage, tomato, cheese,
                                cucumber. With a warm pizza wil warm your days.
                            </Typography>
                            <Divider />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item container xs={12} md={6} >

                        <Stack direction={"row"}>
                            <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                {"Topping(1)"}
                            </Typography>

                        </Stack>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <Stack direction={'row'} spacing={10}>
                                <Typography gutterBottom variant="subtitle2" component="div" whiteSpace='pre-wrap'>
                                    Cheese Burger
                                </Typography>
                                <FormControlLabel value="cheese" control={<Radio />} label="" />

                            </Stack>
                            <Stack spacing={10} direction={'row'}>
                                <Typography gutterBottom variant="subtitle2" component="div" whiteSpace='pre-wrap'>
                                    Burger & Fires
                                </Typography>

                                <FormControlLabel value="fires" control={<Radio />} label="" />
                            </Stack>
                            <Stack spacing={10} direction={'row'}>
                                <Typography gutterBottom variant="subtitle2" component="div" whiteSpace='pre-wrap'>
                                    Pizza
                                </Typography>

                                <FormControlLabel value="pizza" control={<Radio />} label="" />
                            </Stack>
                            <Stack spacing={10} direction={'row'}>
                                <Typography gutterBottom variant="subtitle2" component="div" whiteSpace='pre-wrap'>
                                    {"Cheese Pizza-$2.50"}
                                </Typography>

                                <FormControlLabel value="cheesePizza" control={<Radio />} label="" />
                            </Stack>
                        </RadioGroup>
                    </Grid>
                    <Grid item container xs={12} md={6} >
                        <Stack direction={"row"}>

                        </Stack>
                    </Grid>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </>
    )
}

export default AddItem;