import Item from './Item'

const Items = ({items}) => {
    return (
        <div>
            { items.map((item) => <Item item={item} />) }
        </div>
    )
}

export default Items