import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FoodItems from './FoodItems';

import food1 from '../../Assets/food1.png'
import food2 from '../../Assets/food2.png'
import food3 from '../../Assets/food3.png'
import food4 from '../../Assets/food4.png'


interface Food {
    foodID: string;
    foodImg: string;
    foodName: string;
    foodDescription: string;
    foodPrice: string;
    foodStatus: string;
    recProducts: string[];
}


// interface Food {
//     foodID: string;
//     calories: string;
//     categoryID: string;
//     description: string;
//     estimatedTime: string;
//     images: string[];
//     label: string;
//     menuID: string;
//     name: string;
//     order: string;
//     recommendedProducts: string[];
//     restaurantID: string;
//     prices: string;
//     itemSize: string;
//     videos: string[];
//     views: string;
//     foodImg: string;
//     foodName: string;
//     foodDescription: string;
//     foodPrice: string;
//     foodStatus: string;
// }

const foods: Food[] = [
    {
        foodID: "ID1",
        foodImg: food1,
        foodName: "Cheese Burger",
        foodDescription: "Entree Ingredient information",
        foodPrice: "$6.57",
        foodStatus: "Popular",
        recProducts: ["1", "2"]
    },
    {
        foodID: "ID2",
        foodImg: food2,
        foodName: "Burger & Fires",
        foodDescription: "Entree Ingredient information",
        foodPrice: "$8.11",
        foodStatus: "Recommended",
        recProducts: []
    },
    {
        foodID: "ID3",
        foodImg: food3,
        foodName: "Pizza",
        foodDescription: "Entree Ingredient information",
        foodPrice: "$10",
        foodStatus: "",
        recProducts: ["3", "2"]

    },
    {
        foodID: "ID4",
        foodImg: food4,
        foodName: "Cheese Pizza",
        foodDescription: "Entree Ingredient information",
        foodPrice: "$12.3",
        foodStatus: "Popular",
        recProducts: []
    }
]

interface MenuType {
    categoryName: string
}

const CategoryComponent: React.FC<MenuType> = (props) => {

    const categoryName = props.categoryName;

    return (
        <div className="food-menu">

            <Typography variant="h4" gutterBottom>
                {categoryName}
            </Typography>
            <Grid container spacing={2}>
                {
                    foods.map((food) =>
                        <Grid item xs={12} md={6} xl={3}>
                            <FoodItems foodData={food} />
                        </Grid>
                    )
                }
            </Grid>
        </div>
    );
}

export default CategoryComponent;
