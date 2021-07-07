import React , {createContext, useCallback, useState} from 'react'
import axios from 'axios';

export const myContext = createContext();


export const AppContext = ({children}) => {

    /*UseState Block*/
    const [mealsState, setMealsState] = useState([]);
    const [categoriesState, setCategoriesState] = useState([]);
    const [randomMealState, setRandomMealState] = useState([]);
    /*----------------->*/ 

    //Fetching date from Mealdb via Axios
    //BEGIN -> HANDLERS!!! BLOCK
    const fetchDataHomePageMeals = useCallback((searchTerm) => {    
        axios.get(`https://www.themealdb.com/api/json/v2/1/search.php?s=${searchTerm}`)
            .then(res =>{
                    console.log(res.data.meals);
                    setMealsState(res.data.meals);
                })
    },[]);

    const fetchCategories = useCallback(() => {
        axios.get("https://www.themealdb.com/api/json/v2/1/categories.php")
            .then(res => {
                    console.log(res.data.categories);
                    setCategoriesState(res.data.categories);
            });
    },[]);

    const fetchRandomMeal = useCallback(() => {
        axios.get("https://www.themealdb.com/api/json/v2/1/random.php")
        .then(res => {
            console.log(res.data.meals);
            setRandomMealState(res.data.meals);
        });
    },[]);
    //END HANDLERS!!! BLOCK
    return(
        /*Showing data from callback*/
        <myContext.Provider value={{fetchDataHomePageMeals, mealsState, fetchCategories,categoriesState, fetchRandomMeal, randomMealState}}>{children}</myContext.Provider>
    )                             /*{{  handler,             state  }} */
}
