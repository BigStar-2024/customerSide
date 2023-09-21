import React, { useState } from 'react'

import { US, IT, FR, ES, PT } from 'country-flag-icons/react/3x2'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Avatar, ButtonBase } from '@mui/material'



const LanSelector = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const country = [
        {
            title: 'US',
            code: (
                <US
                    title='United States'
                    style={{ width: '30px', height: '20px' }}
                    className='...'
                />
            )
        },
        {
            title: 'ES',
            code: (
                <ES
                    title='United States'
                    style={{ width: '30px', height: '20px' }}
                    className='...'
                />
            )
        },
        {
            title: 'FR',
            code: (
                <FR
                    title='United States'
                    style={{ width: '30px', height: '20px' }}
                    className='...'
                />
            )
        },
        {
            title: 'PT',
            code: (
                <PT
                    title='United States'
                    style={{ width: '30px', height: '20px' }}
                    className='...'
                />
            )
        },
        {
            title: 'IT',
            code: (
                <IT
                    title='United States'
                    style={{ width: '30px', height: '20px' }}
                    className='...'
                />
            )
        },
    ]

    const [currentLanguage, setCurrentLanguage] = useState({
        title: country[0].title,
        code: country[0].code
    })

    const clickLanguage = (title: any, code: any) => {
        setCurrentLanguage({
            title: title,
            code: code
        })
    }


    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 2,
                }}
            >
                <ButtonBase sx={{
                    borderRadius: '12px', overflow: 'hidden', height: "48px"
                }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            backgroundColor: "#efefef",
                            border: "2px solid #858585",
                            borderRadius: "10px",
                            // ...theme.typography.commonAvatar,
                            // ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            width: "90px",
                            color: 'black',
                            // background: theme.palette.secondary.light,
                            // color: theme.palette.secondary.dark,
                            '&:hover': {
                                // background: theme.palette.secondary.dark,
                                // color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleClick}
                        color="inherit"
                    >
                        {currentLanguage.code}
                        {'-'}
                        {currentLanguage.title}
                        {/* <IconMenu2 stroke={1.5} size="1.3rem" /> */}
                    </Avatar>
                </ButtonBase>

            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}

            >
                <Typography sx={{ p: 2 }}>
                    <Box sx={{ flexGrow: 1, maxWidth: "90px" }}>
                        <Grid container spacing={2}>
                            {country.map((item, index) => (
                                <Grid item xs={12} key={`country-${index}`}>
                                    <Button
                                        onClick={() => {
                                            clickLanguage(item.title, item.code)
                                            handleClose()
                                        }}
                                        fullWidth
                                    >
                                        {item.title}
                                        {'-'}
                                        {item.code}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Typography>
            </Popover>
        </>
    )
}

export default LanSelector
