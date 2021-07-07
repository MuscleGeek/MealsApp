import React, {useEffect, useContext} from 'react';
import "./Categories.scss"
import { myContext } from '../context/context';



const Categories = () => {
    
    const {fetchCategories,categoriesState} = useContext(myContext);
    
    useEffect(()=>{
        fetchCategories();
    },[fetchCategories]);
    
    return (
        <div className="categories">
            {categoriesState.map(category => (  
                <div key={category.idCategory}>
                    <img src={category.strCategoryThumb} alt="#"/>
                    <h3>{category.strCategory}</h3>
                </div>
            ))}
        </div>
    )
};

export default Categories
