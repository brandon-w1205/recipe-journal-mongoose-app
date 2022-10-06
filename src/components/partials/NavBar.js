import {Link} from 'react-router-dom'

export default function NavBar() {
    return(
        <nav>
            <ul style={{ listStyleType: 'none'}}>
                <li>
                    <Link  to='/'>Home</Link>
                    {' | '}
                    <Link  to='/recipes'>All Recipes</Link>
                    {' | '}
                    <Link  to='/recipes/new'>Create a Recipe</Link>
                </li>
            </ul>
        </nav>
    )
}