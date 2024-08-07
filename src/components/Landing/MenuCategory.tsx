import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";
import { useLayoutEffect, useState } from 'react';
import { categoryData } from '../../helpers/categoryData';
import { menuData } from '../../helpers/menuData';
import { Container, IconButton, Input, InputAdornment, MenuItem, MenuList, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TransitionGroup } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';
// import {primary} from "@mui/material/colors"

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
                <Box >
                    <Typography component="div">{children}</Typography>
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


// interface MenuTabProps {
//     numberCategoryClick: (category: string) => void;
// }

// "category4", "category5", "category6", "category7", "category8", "category9", "category10"
const categoryTitles1: string[] = ["category1", "category2", "category3", "category4", "category5", "category6", "category7", "category8", "category9", "category10"]
const categoryTitles2: string[] = ["category11", "category12", "category13"]
const categoryTitles3: string[] = ["category14", "category15", "category16"]

const categoryInfos = categoryData;

const categoryTitles = categoryInfos.map(({ categoryName }) => categoryName);

const menuInfos = menuData;

const useStyles: any = makeStyles((theme: any) => ({
    menuLink: {
        // Add your styles here
        fontWeight: 500,
        color: '#000000',
        textDecoration: 'none',
        transition: 'color 0.1s ease',
        display: "flex",
        flexDirection: "row",
        // marginRight: "1.5em"
    },
    menuLinkActive: {
        // Add your styles here
        color: "red",
    },
    menuItem: {
        // Add your styles here
        // marginRight: "1.5em",
        display: "inline-block",
        color: '#000000 !important'
    },
}));


const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.substr(1);

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor - 180 && value <= ceil - 180;

// hooks

const useScrollspy = (ids: string[], offset: number = 0) => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.pageYOffset;

            const position = ids
                .map((id) => {
                    const element = document.getElementById(id);

                    if (!element) return { id, top: -1, bottom: -1 };

                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - offset);
                    const bottom = clamp(rect.bottom + scroll - offset);

                    return { id, top, bottom };
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));

            setActiveId(position ? position.id : "" || "");
        };

        listener();

        window.addEventListener("resize", listener);
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("resize", listener);
            window.removeEventListener("scroll", listener);
        };
    }, [ids, offset]);


    const categoryInfo = categoryInfos.find(({ categoryName }) => activeId === categoryName);

    const menuInfo = menuInfos.find(({ menuID }) => menuID === (categoryInfo ? categoryInfo.menuID : ""));

    const menuIndex = Number(menuInfo ? menuInfo.order : "") - 1;


    // console.log("activeId: ", activeId);
    // console.log("menuIndex: ", menuIndex);

    const scrollMeCa = { activeId: activeId, menuIndex: menuIndex }

    return scrollMeCa;
};


const MenuTab: React.FC = () => {

    const { activeId, menuIndex } = useScrollspy(categoryTitles, 54);

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [value, setValue] = React.useState(0);

    // const menuIndex = Number(menuInfos.find(({menuID}) => (menuID == (
    //     categoryInfos.find(({categoryName}) => activeId === categoryName) ?.menuID
    // ))) ?.order)

    const classCategory = useStyles();

    React.useEffect(() => {
        if (menuIndex >= 0) {
            setValue(menuIndex);
        }
        // console.log("menuIndex", menuIndex);
    }, [menuIndex]);

    // let isDraggable = false;
    // let moveX = 0;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log("searchInput", event.target.value);
    }

    // const handleMouseDown = (event: any) => {
    //     isDraggable = true;
    //     moveX = event.clientX;
    //     // Handle the mouse down event here
    // }

    // const handleMouseMove = (event: any) => {
    //     if (isDraggable) {
    //         const moveDiv = document.getElementById('moveDiv');
    //         if (moveDiv != null) {
    //             // moveDiv.style.left = moveDiv.scrollLeft + (event.clientX - moveX) + 'px';

    //         }
    //         moveX = event.clientX;
    //     }
    //     // Handle the mouse move event here
    // }

    // const handleMouseUp = (event: any) => {
    //     isDraggable = false;
    //     // Handle the mouse up event here
    // }


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {!showSearchBar ? (
                    <Box sx={{ justifyContent: "space-between", display: "flex", alignItems: "end", }} >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="MENU1" {...a11yProps(0)} />
                            <Tab label="MENU2" {...a11yProps(1)} />
                            <Tab label="MENU3" {...a11yProps(2)} />
                        </Tabs>

                        <IconButton onClick={() => setShowSearchBar(!showSearchBar)} >
                            <SearchIcon sx={{ fontSize: "30px" }} />
                        </IconButton>
                    </Box>
                ) : (
                        <Box sx={{ height: "48px", display: "flex", alignItems: "end", justifyContent: "space-between" }}>
                            <IconButton >
                                <SearchIcon sx={{ fontSize: "30px" }} />
                            </IconButton>
                            <TransitionGroup>
                                <Input rows={2} autoFocus inputProps={{ style: { width: "100%" } }} onChange={handleSearch}
                                // endAdornment={<InputAdornment position="end"><IconButton onClick={() => setShowSearchBar(false)}><CloseIcon /></IconButton></InputAdornment>}
                                />
                            </TransitionGroup>
                            <IconButton onClick={() => setShowSearchBar(!showSearchBar)} >
                                <CloseIcon sx={{ fontSize: "30px" }} />
                            </IconButton>
                        </Box>
                    )}
            </Box>
            {/* {
                categoryTitles.map(())
            } */}
            <CustomTabPanel value={value} index={0}>
                <Box
                    sx={{
                        // display: 'flex',
                        // flexDirection: 'row',
                        alignItems: 'left',
                        width: '100%',
                        color: "#000000",
                        display: 'block',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <Box sx={{
                        display: 'block', whiteSpace: 'nowrap', position: 'relative', overflowX: "scroll",
                        '&::-webkit-scrollbar': {
                            display: 'none', // Adjust the width as needed
                        },
                    }}

                        // onMouseDown={handleMouseDown}
                        // onMouseMove={handleMouseMove}
                        // onMouseUp={handleMouseUp}
                        id="moveDiv"
                    >
                        {
                            categoryTitles1.map((category) => (
                                <MenuItem key={`category-${category}`} sx={{ display: 'inline-block' }}>
                                    <ScrollLink
                                        to={`${category}`}
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={500}
                                        activeClass={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                    // className={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                    >
                                        {capitalize(category)}
                                    </ScrollLink>

                                </MenuItem>
                            ))
                        }
                    </Box>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>

                <Box
                    sx={{
                        // display: 'flex',
                        // flexDirection: 'row',
                        alignItems: 'left',
                        width: '100%',
                        color: "#000000",
                        display: 'block',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <Box sx={{
                        display: 'block', whiteSpace: 'nowrap', position: 'relative', overflowX: "scroll",
                        '&::-webkit-scrollbar': {
                            display: 'none', // Adjust the width as needed
                        },
                    }}

                        // onMouseDown={handleMouseDown}
                        // onMouseMove={handleMouseMove}
                        // onMouseUp={handleMouseUp}
                        id="moveDiv"
                    >
                        {
                            categoryTitles2.map((category) => (
                                <MenuItem key={`category-${category}`} sx={{ display: 'inline-block' }}>
                                    <ScrollLink
                                        to={`${category}`}
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={500}
                                        activeClass={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                    // className={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                    >
                                        {capitalize(category)}
                                    </ScrollLink>

                                </MenuItem>
                            ))
                        }
                    </Box>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>

                <Box
                    sx={{
                        // display: 'flex',
                        // flexDirection: 'row',
                        alignItems: 'left',
                        width: '100%',
                        color: "#000000",
                        display: 'block',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <Box sx={{
                        display: 'block', whiteSpace: 'nowrap', position: 'relative', overflowX: "scroll",
                        '&::-webkit-scrollbar': {
                            display: 'none', // Adjust the width as needed
                        },
                    }}

                        // onMouseDown={handleMouseDown}
                        // onMouseMove={handleMouseMove}
                        // onMouseUp={handleMouseUp}
                        id="moveDiv"
                    >
                        {
                            categoryTitles3.map((category) => (
                                <MenuItem key={`category-${category}`} sx={{ display: 'inline-block' }}>
                                    <ScrollLink
                                        to={`${category}`}
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={500}
                                        activeClass={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                    // className={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                    >
                                        {capitalize(category)}
                                    </ScrollLink>

                                </MenuItem>
                            ))
                        }
                    </Box>
                </Box>
            </CustomTabPanel>
        </Box>
    );
}

export default MenuTab;