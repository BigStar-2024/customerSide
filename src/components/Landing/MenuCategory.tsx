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
                <Box>
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


interface MenuTabProps {
    numberCategoryClick: (category: string) => void;
}


const categoryTitles1: string[] = ["category1", "category2", "category3"]
const categoryTitles2: string[] = ["category4", "category5", "category6"]
const categoryTitles3: string[] = ["category7", "category8", "category9"]

const categoryInfos = categoryData;

const categoryTitles = categoryInfos.map(({ categoryName }) => categoryName);

const menuInfos = menuData;

const useStyles: any = makeStyles((theme: any) => ({
    menuLink: {
        // Add your styles here
        fontWeight: 500,
        color: '#353535',
        textDecoration: 'none',
        transition: 'color 0.1s ease',
        display: "flex",
        flexDirection: "row",
        // marginRight: "1.5em"
    },
    menuLinkActive: {
        // Add your styles here
        color: "blue"
    },
    menuItem: {
        // Add your styles here
        // marginRight: "1.5em",
        display: "inline-block"
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

    const scrollMeCa = { activeId: activeId, menuIndex: menuIndex >= 0 ? menuIndex : 0 }

    return scrollMeCa;
};


const MenuTab: React.FC<MenuTabProps> = (props) => {

    const { activeId, menuIndex } = useScrollspy(categoryTitles, 54);


    const [value, setValue] = React.useState(0);

    // const menuIndex = Number(menuInfos.find(({menuID}) => (menuID == (
    //     categoryInfos.find(({categoryName}) => activeId === categoryName) ?.menuID
    // ))) ?.order)

    const classCategory = useStyles();

    React.useEffect(() => {
        if (menuIndex) {
            setValue(menuIndex);
        }
        // console.log("menuIndex", menuIndex);
    }, [menuIndex]);

    // const [activeCategory, setActiveCategory] = React.useState(null);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const onClick = (numberCategory: number) => {
        props.numberCategoryClick(categoryTitles1[numberCategory]);
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
            {/* {
                categoryTitles.map(())
            } */}
            <CustomTabPanel value={value} index={0}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'left',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    {
                        categoryTitles1.map((category) => (
                            <li key={`category-${category}`} className={classCategory.menuItem}>
                                <ScrollLink
                                    to={`${category}`}
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                >
                                    {capitalize(category)}
                                </ScrollLink>
                            </li>
                        ))
                    }
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'left',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    {
                        categoryTitles2.map((category) => (
                            <li key={`category-${category}`} className={classCategory.menuItem}>
                                <ScrollLink
                                    to={`${category}`}
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                >
                                    {capitalize(category)}
                                </ScrollLink>
                            </li>
                        ))
                    }
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'left',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    {
                        categoryTitles3.map((category) => (
                            <li key={`category-${category}`} className={classCategory.menuItem}>
                                <ScrollLink
                                    to={`${category}`}
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className={clsx(classCategory.menuLink, category === activeId && classCategory.menuLinkActive)}
                                >
                                    {capitalize(category)}
                                </ScrollLink>
                            </li>
                        ))
                    }
                </Box>
            </CustomTabPanel>
        </Box>
    );
}

export default MenuTab;