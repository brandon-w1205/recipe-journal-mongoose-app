import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Recipes() {
    const [recipes, setRecipes] = useState([])

    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipe`)
                setRecipes(response.data)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.message)
                }
            }
        }
        getRecipes()
    }, [])

    const recipeLinks = recipes.map(recipe => {
        return (
            <div key={recipe._id}>
                <ul>
                    <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                </ul>
            </div>
        )
    })

    return (
        <div>
            <h1>All Recipes</h1>

            {recipeLinks}

            <p>{errorMessage}</p>
        </div>
    )
}