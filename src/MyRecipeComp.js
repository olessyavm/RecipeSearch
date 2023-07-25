function MyRecipeComp({label, image, calories, ingredients}){

    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
        </div>
        <div className="container">
            <img src={image} alt="food"/>
        </div>
        <div className="container list">
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="food" className="icon"/>
                    {ingredient}</li>
                ))}
            </ul>
        </div>
        <div className="container">  
            <p>{calories.toFixed()} calories</p>
        </div>
        
                
        
        </div>
    )
}
export default MyRecipeComp;