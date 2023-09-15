import React, { useState } from 'react';
// import Carousel from 'react-material-ui-carousel';
import { Carousel } from 'react-responsive-carousel';
import {
    Paper,
    Button,
    Typography,
    FormControlLabel,
    Switch,
    RadioGroup,
    Radio,
    Slider,
} from '@mui/material'

import "../style/SecondExample.scss"
// import Settings, { DefaultSettingsT, SettingsT } from './Settings';


export interface SettingsT {
    autoPlay: boolean,
    animation: "fade" | "slide",
    indicators: boolean,
    duration: number,
    navButtonsAlwaysVisible: boolean,
    navButtonsAlwaysInvisible: boolean,
    fullHeightHover: boolean,
    cycleNavigation: boolean,
    swipe: boolean,
    [key: string]: any
}

export const DefaultSettingsT: SettingsT = {
    autoPlay: true,
    animation: "fade",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true
}

interface SettingsProps {
    settings: SettingsT,
    setSettings: Function
}

const Settings = ({ settings, setSettings }: SettingsProps) => {

    /** Default function for Switches */
    const toggler = (event: any) => {
        setSettings({
            ...settings,
            [event.target.value]: !settings[event.target.value]
        })
    }

    /** Default function for Radio Groups */
    const radio = (event: any) => {
        setSettings({
            ...settings,
            [event.target.name]: event.target.value
        })
    }

    /** Default function for Sliders */
    const slider = (event: any, value: any) => {
        console.log(event);
        console.log(value);
        setSettings({
            ...settings,
            [event.target.name]: value
        })
    }

    const Toggler = ({ name }: { name: string }) => {
        return (
            <FormControlLabel
                control={
                    <Switch onChange={toggler} checked={settings[name]} value={name}
                        color="primary" />
                }
                label={name}
                labelPlacement='end'
            />
        )
    }

    return (
        <>
            <div className="Options">
                <div>
                    <Typography>General Options</Typography>
                    <Toggler name="autoPlay" />
                    <Toggler name="indicators" />
                    <Toggler name="swipe" />
                </div>

                <div>
                    <Typography>Navigation (Buttons) Options</Typography>
                    <Toggler name="cycleNavigation" />
                    <Toggler name="navButtonsAlwaysVisible" />
                    <Toggler name="navButtonsAlwaysInvisible" />
                    <Toggler name='fullHeightHover' />
                </div>

                <div>
                    <Typography>Animation Options</Typography>
                    <FormControlLabel
                        control={
                            <div>
                                <RadioGroup
                                    name="animation"
                                    value={settings.animation}
                                    onChange={radio}
                                    row
                                    style={{ marginLeft: "10px" }}
                                >
                                    <FormControlLabel value="fade" control={<Radio color="primary" />} label="Fade" />
                                    <FormControlLabel value="slide" control={<Radio color="primary" />} label="Slide" />
                                </RadioGroup>
                            </div>
                        }
                        label=""
                    />

                    <FormControlLabel
                        control={
                            <div style={{ width: '100%' }}>
                                {/* <Typography>
                                    Animation Duration in ms
                                </Typography> */}
                                <Slider
                                    defaultValue={500}
                                    getAriaValueText={() => `${settings.duration}ms`}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={100}
                                    marks
                                    min={100}
                                    max={3000}
                                    onChangeCommitted={(e: any, v: any) => {
                                        e.target.name = 'duration';
                                        slider(e, v);
                                    }}
                                />
                            </div>
                        }
                        label="Animation Duration in ms"
                        labelPlacement='bottom'
                    />
                </div>
            </div>
        </>
    )
}


const SecondExample = () => {
    const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);

    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            <Typography variant='h4'>Example: Learus Projects (random)</Typography>
            <br />
            <Carousel
                className="SecondExample"
                {...settings}
            >
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index} />
                    })
                }
            </Carousel>
            <br />
            <Settings settings={settings} setSettings={setSettings} />
        </div>
    )
}


type Item = {
    name: string,
    description: string,
    color: string,
    href: string
}

interface ProjectProps {
    item: Item
}

function Project({ item }: ProjectProps) {
    return (
        <Paper
            className="Project"
            style={{
                backgroundColor: item.color,
            }}
            elevation={10}
        >
            <Typography variant='h5'>{item.name}</Typography>
            <br />
            <Typography>{item.description}</Typography>

            <Button className="CheckButton" component='a' href={item.href} target='_blank' rel='noreferrer'>
                Check it out!
            </Button>
        </Paper>
    )
}

const items: Item[] = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8",
        href: 'https://github.com/Learus/Lear-Music-Reader'
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1",
        href: 'https://github.com/Learus/HashCode2019'
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        href: 'https://play.google.com/store/apps/details?id=com.Brewery.Terrio'
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        href: 'https://github.com/Learus/react-material-ui-carousel'
    }
]

export default SecondExample;