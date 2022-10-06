import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function EditRecipe() {
    const { id } = useParams()
    const [form, setForm] = useState({})
    const [recipe, setRecipe] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipe/${id}`)
                // console.log(response.data)
                setRecipe(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getRecipe()
    }, [])

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/recipe/${id}`, form)

            navigate(`/recipes/${id}`)
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>Edit Recipe</h1>

            <p>{errorMessage}</p>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        value={form.name}
                        placeholder='Recipe name...'
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='ingredients'>Ingredients:</label>
                    <input
                        type='text'
                        id='ingredients'
                        value={form.ingredients}
                        placeholder='Ingredients...'
                        onChange={e => setForm({ ...form, ingredients: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='directions'>Directions:</label>
                    <input
                        type='text'
                        id='directions'
                        value={form.directions}
                        placeholder='Directions...'
                        onChange={e => setForm({ ...form, directions: e.target.value })}
                    />
                </div>

                <button type='Submit'>Submit Edit</button>

                <Link to={`/recipes/${id}`}>Go Back</Link>
            </form>
        </div>
    )
}