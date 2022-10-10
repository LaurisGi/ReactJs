import './button.css'

export const Button = (props) => {
    return <button className={`butonas ${props.className}`}>{props.text}</button>
}