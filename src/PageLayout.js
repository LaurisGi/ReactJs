import { Outlet, Navigate } from "react-router-dom"
import { Navigation } from '../src/Navigation/Navigation'
export const PageLayout = ({user, onLogout}) => {
    if (!user) {
        return <Navigate to='/login'/>
    }
    return (
    <div>
        <Navigation onLogout={onLogout} />
        Page Layout
        <Outlet />
    </div>
    )
}