import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Navigation = ({onLogout}) => {

const navigate = useNavigate();
    

const handleLogout = () => {
    onLogout();
    navigate('/login')
}

return (
<div style={{display: 'flex', gap: '20px', padding: 20,}} className='navigation'>
<Link style={{margin: '0 auto'}} to="/">Home</Link>
<Link  to="/about">About</Link>
<Link  to="/contacts">Contacts</Link>
<Link  to="/login">Login</Link>
    <button onClick={handleLogout}>Logout</button> :
</div>
)
}