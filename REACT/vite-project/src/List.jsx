
function List(props){
    const itemList = props.items;
    const category = props.category;
    // fruit.sort((a,b)=> b.name.localeCompare(a.name))
    // fruit.sort((a,b)=> b.calories - (a.calories))

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);
    
    return(
        <div>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
        </div>
    );
}

export default List