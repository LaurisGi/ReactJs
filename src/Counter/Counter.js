import { useEffect, useState } from "react";

export const Counter = () => {
    const [num, setNum] = useState(0);
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleIncrement = () => {
        setNum(num + 1);
    }
    const handleDecrement = () => {
        setNum(num - 1);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setTodo(json);
            setIsLoading(false);
        })
        .catch(() => {
            setIsLoading(false);
        });

    }, []); //! tuscias arejus tik tada kai uzsimountina.Pasiskaityti Component lifecycle hooks

    console.log(todo);

if (isLoading) {
    return <div>Loading...</div>
}

    return (
        <>
            <span>{num}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>
                <div>{todo?.userId}</div>
                <div>{todo?.id}</div>
                <div>{todo?.title}</div>
                <div>{String(todo?.completed)}</div>
            </div>
        </>
    )
}