import React, {useState, useCallback, useContext} from 'react';
import "./HomePage.scss";
import { myContext } from '../context/context';

const HomePage = () => {
    const [searchState, setSearchState] = useState("");
    /*console.log(searchState); /*testing state status */ 

    /*function from context*/
    const {fetchDataHomePageMeals, mealsState} = useContext(myContext);

    const fetchMealData = useCallback(() =>
    {fetchDataHomePageMeals(searchState);}, 
    [searchState,fetchDataHomePageMeals]);
    return (
        <div className="home">
            <div className="home-search">
                <input type="text" 
                        placeholder="Ingresa nombre de platillo..." 
                        value={searchState} 
                        onChange={(e) => setSearchState(e.target.value)}
                />
                <button onClick={fetchMealData}>Buscar</button>
            </div>

            {/*This is showing meal search result*/}
            <div className="home-gridview">
                {mealsState ? (mealsState.map((meal) => (
                    <div className="home-meal" key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt="#"/>
                        <h3>{meal.strMeal}</h3>
                    </div>
                    ))
                ):  (
                    <h2>Not meals not found! Try again Geek!</h2>
                )}

            </div>
        </div>
    )
}

export default HomePage
