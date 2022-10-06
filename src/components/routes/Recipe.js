import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Recipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const [comments, setComments] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [commentForm, setCommentForm] = useState({
        content: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipe/${id}`)
                setRecipe(response.data)
                setComments(response.data.comments)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getRecipe()
    }, [])

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/recipe/${id}`)
            navigate('/recipes')
        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    const handleComment = async e => {
        try {
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/recipe/${id}/comment`, commentForm)
            navigate(`/recipes/${id}`)
        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    console.log(recipe)
    return (
        <div>
            <h1>{recipe.name}</h1>

            <p>{errorMessage}</p>

            <div>
                <h2></h2>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Directions: {recipe.directions}</p>
                <div>
                    <button><Link style={{ textDecoration: 'none', color: 'black' }} to={`/recipes/${id}/edit`}>Edit this Recipe</Link></button>

                    <button onClick={handleDelete}>Delete Recipe</button>
                </div>
            </div>

            <div>
                <h2>Comments:</h2>
                <p>{comments.content}</p>

            </div>

            <form onSubmit={handleComment}>
                <label htmlFor='comment'>Add a Comment:</label>
                <textarea
                    id='comment'
                    value={commentForm.content}
                    onChange={e => setCommentForm({ ...commentForm, content: e.target.value })}
                ></textarea> 
                <button>Submit Comment</button>
            </form>
        </div>
    )
}