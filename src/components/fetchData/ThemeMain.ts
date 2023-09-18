import { createTheme } from '@mui/material/styles'
import { BasicColor } from './Color'
// import { themeFetch } from "../../../redux-functionality/slices/siteTypeSlice"
import { SiteTypeInfo } from '../../types/redux/siteType';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux-functionality';

// let themeInfo: SiteTypeInfo;

// const getTheme = async (): Promise<any> => {
//     return new Promise((resolve, reject) => {
//         const result: SiteTypeInfo = useSelector((state: RootState) => state.siteType.siteTypeData);
//         if (result) {
//             resolve(result);
//         } else {
//             reject("error");
//         }
//     });
// }

// // function getTheme() {
// //     const result: SiteTypeInfo = useSelector((state: RootState) => state.siteType.siteTypeData)
// //     return result;
// // }



// getTheme().then((themeFetch: SiteTypeInfo) => {
//     themeInfo = themeFetch;
//     // Use the themeFetch variable here
// }).catch((error: String) => {
//     console.log("themeFetch: ", error)
//     // Handle any errors that occurred during the async operation
// });



const FONT_FAMILY = [
    'Poppins',
    'Arial',
    'Roboto',
    'BlinkMacSystemFont',
    '-apple-system',
    'sans-serif',
    '"Segoe UI"',
    '"Helvetica Neue"',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
].join(',')

// const themeInfo: SiteTypeInfo = { ...themeFetch };

export const getThemeMain = (themeInfo: SiteTypeInfo) => createTheme({
    typography: {
        fontFamily: [
            'Arial',
            'Poppins',
            'Roboto',
            'BlinkMacSystemFont',
            '-apple-system',
            'sans-serif',
            '"Segoe UI"',
            '"Helvetica Neue"',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    },
    // MuiButton: {
    //     fontFamily: FONT_FAMILY,
    //     backgroundColor: '#000000'
    // },

    // MuiCard: {
    //     fontFamily: FONT_FAMILY
    // },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    fontFamily: themeInfo.mainFont ? themeInfo.mainFont : FONT_FAMILY,
                    backgroundColor: themeInfo.backgroundColor ? themeInfo.backgroundColor : "",
                },
                // text: {
                //     fontFamily: FONT_FAMILY
                // }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    fontFamily: themeInfo.mainFont ? themeInfo.mainFont : FONT_FAMILY,

                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontFamily: FONT_FAMILY
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: FONT_FAMILY,
                    backgroundColor: themeInfo ? themeInfo.itemColor : '#91ff35',
                    // backgroundColor: '#91ff35',

                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    // textAlign:'end',
                }
            }
        },
        MuiLink: {
            variants: [
                {
                    props: { variant: 'body1' },
                    style: ({ theme }) => ({
                        fontSize: 16,
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 12
                        },
                        color: 'white',
                        textAlign: 'center'
                    })
                }
            ],
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    textAlign: 'center'
                }
            }
        },
        // MuiMenuItem: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: "yellow",
        //             "&.Mui-selected": {
        //                 backgroundColor: "green",
        //                 "&.Mui-focusVisible": { background: "orange" }
        //             }
        //         }
        //     }
        // },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    // borderRadius: 10,
                    ':focus': {
                        outline: 0,
                        border: 0
                    },

                    // '& fieldset': {
                    //     borderColor: BasicColor.greenSoft
                    // },
                    // ':hover fieldset': {
                    //     borderColor: BasicColor.greenSoft
                    // }
                },
                input: {
                    ':focus :valid': {
                        outline: 0,
                        border: 0
                    }
                }
            }
        },
        // MuiRadio: {
        //     styleOverrides: {
        //         root: {
        //             color: BasicColor.green,
        //             '& .MuiSvgIcon-root': {
        //                 fontSize: 30
        //             }
        //         }
        //     }
        // },

        // MuiTypography: {
        //     variants: [
        //         {
        //             props: { variant: 'body4' },
        //             style: ({ theme }) => ({
        //                 fontSize: 16,
        //                 textAlign: 'left',
        //                 [theme.breakpoints.down('sm')]: {
        //                     fontSize: 12
        //                 }
        //             })
        //         },
        //         {
        //             props: { variant: 'h4' },
        //             style: ({ theme }) => ({
        //                 fontSize: 36,
        //                 textAlign: 'left',
        //                 [theme.breakpoints.down('sm')]: {
        //                     fontSize: 24
        //                 },
        //                 fontWeight: 'bold'
        //             })
        //         }
        //     ],
        //     styleOverrides: {}
        // }
    }
})