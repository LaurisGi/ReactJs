import { Form } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export const LoginPage = ({ onLogin }) => {
    const navigateTo = useNavigate();
    
    const handleLogin = () => {
        onLogin();
        navigateTo('/');
    }
    return (
        <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" label></input>
                    </div>
                <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password"></input>
                    </div>
            </div>
            <button onClick={handleLogin}>Login</button>
        </form>
    )
}