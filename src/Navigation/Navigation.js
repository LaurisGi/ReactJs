import { Link } from "react-router-dom"

export const Navigation = () => <div style={{display: "flex", gap: 10}} className='navigation'>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contacts">Contacts</Link>
</div>