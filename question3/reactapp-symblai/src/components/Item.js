const Item = ({item}) => {
    return (
        <div className="item">
            <h3>
            ID: { item.id }
            {/* <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i> */}
            </h3>
            <p>Name: { item.name }</p>
        </div>
    )
}

export default Item