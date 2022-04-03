import ItemCount from "./ItemCount";

const ItemListContainer = (prop) => {
    return (
        <>
            <h3 className= "bodyDetail">{prop.greeting}</h3>
            <ItemCount stock={5} initial={1}/>
        </>
    )
}

export default ItemListContainer;