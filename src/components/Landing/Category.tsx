import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FoodItems from './FoodItems';
import { foodDatas } from "../../helpers/foodData"

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


interface CategoryType {
    categoryID: string;
    categoryName: string;
    imageURL: string;
    menuID: string;
    order: string;
    restaurantID: string;
}

interface CategoryProps {
    categoryData: CategoryType;
}



const CategoryComponent: React.FC<CategoryProps> = (props) => {

    const category = props.categoryData;
    const foods = foodDatas;

    const foodItems = foods.filter((food) => category.categoryID == food.categoryID);

    const sortFoods = foodItems.sort((a: any, b: any) => a.order - b.order);


    return (
        <div className="food-menu">

            <Typography variant="h4" gutterBottom>
                {category.categoryName}
            </Typography>
            <Grid container spacing={2}>
                {
                    sortFoods.map((foodItem, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                                <FoodItems foodData={foodItem} key={index} categoryName={category.categoryName} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default CategoryComponent;
