import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Recipe Journal</h1>
            <p>We plan to implement a search functionality, but for now, click the link below to see all recipes.</p>
            <Link to={`/recipes`}>Recipes</Link>
        </div>
    )
}