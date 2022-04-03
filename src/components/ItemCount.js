import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({stock=5, initial=1}) => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(1)
    }, []);

    const increase = () => {
        if (count < stock) {
            setCount(count+1)
        }
    }

    const decrease = () => {
        if (count > initial) {
            setCount(count-1)
        }
    }

    const onAdd = () => {
        alert("Estás añadiendo al carrito " + count + " unidades")
    }

    return (
        <div className="m-4">
            <div className="ms-2">
                <button className="btn shadow-sm button" onClick={decrease}>-</button>
                <span className="m-4">{count}</span>
                <button className="btn shadow-sm button" onClick={increase}>+</button>
            </div>
            <div className="mt-2">
                <button className="btn shadow-sm button" onClick={onAdd}>Añadir al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;