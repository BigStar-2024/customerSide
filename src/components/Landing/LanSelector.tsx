import React, { useState } from 'react'

import { US, IT, FR, ES, PT } from 'country-flag-icons/react/3x2'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'



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
            <div>
                <Button
                    aria-describedby={id}
                    color='secondary'
                    onClick={handleClick}
                >
                    {currentLanguage.code}
                    {'-'}
                    {currentLanguage.title}
                </Button>
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
                                            {item.code}
                                            {'-'}
                                            {item.title}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Typography>
                </Popover>
            </div>

        </>
    )
}

export default LanSelector
