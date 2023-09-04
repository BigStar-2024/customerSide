import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button"


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


interface MenuTabProps {
    numberCategoryClick: (category: string) => void;
}

const categoryTitle: string[] = ["category1", "category2", "category3", "category4"]




const MenuTab: React.FC<MenuTabProps> = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const onClick = (numberCategory: number) => {

        props.numberCategoryClick(categoryTitle[numberCategory]);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="MENU1" {...a11yProps(0)} />
                    <Tab label="MENU2" {...a11yProps(1)} />
                    <Tab label="MENU3" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => onClick(0)}>Category1</Button>
                        <Button onClick={() => onClick(1)}>Category2</Button>
                        <Button onClick={() => onClick(2)}>Category3</Button>
                    </ButtonGroup>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => onClick(3)}>Category4</Button>
                        <Button>Category5</Button>
                        <Button>Category6</Button>
                    </ButtonGroup>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>Category7</Button>
                        <Button>Category8</Button>
                        <Button>Category9</Button>
                    </ButtonGroup>
                </Box>
            </CustomTabPanel>
        </Box>
    );
}

export default MenuTab;