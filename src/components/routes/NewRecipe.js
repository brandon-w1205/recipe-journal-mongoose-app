import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewRecipe() {
    const [form, setForm] = useState({
        name: '',
        ingredients: '',
        directions: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/recipe`, form)
            navigate('/recipes')
        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>New Bounty</h1>

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

                <button type='Submit'>Submit Recipe</button>

            </form>
        </div>
    )
}