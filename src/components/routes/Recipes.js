import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Recipes() {
    const [recipes, setRecipes] = useState([])

    const [errorMessage, setErrorMessage] = useState('')

    
    return (
        <div>
            <h1>All Recipes</h1>
        </div>
    )
}