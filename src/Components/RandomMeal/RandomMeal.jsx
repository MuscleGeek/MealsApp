import React, {useContext, useEffect}from 'react'
import { myContext } from '../context/context'
import "./RandomMeal.scss"

const RandomMeal = () => {

    const {fetchRandomMeal, randomMealState} = useContext(myContext);

    useEffect(() => {
        fetchRandomMeal();
    }, [fetchRandomMeal])
    return (
        <div className="random">
            {randomMealState.map(rand => (
                <div className="random-grid" key={rand.idMeal}>
                    <div className="random-grid-control">
                        <img src={rand.strMealThumb} alt="random Meal"/>
                        <hr/>
                        <button type="button" onClick={fetchRandomMeal}>Lets get another one!</button>
                    </div>
                    <div className="random-grid-instructions">
                        <h3>How to...</h3>
                        <p>{rand.strInstructions}</p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default RandomMeal
