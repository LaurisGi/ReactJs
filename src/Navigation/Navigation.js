import { Link } from "react-router-dom"

export const Navigation = () => <div style={{display: 'flex', gap: '20px', padding: 20,}} className='navigation'>
<Link style={{margin: '0 auto'}} to="/">Home</Link>
<Link  to="/about">About</Link>
<Link  to="/contacts">Contacts</Link>
</div>