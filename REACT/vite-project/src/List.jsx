import './list.css';
function List(props){
    // const itemList = props.items;
    // const category = props.category;
    // // fruit.sort((a,b)=> b.name.localeCompare(a.name))
    // // fruit.sort((a,b)=> b.calories - (a.calories))

    // const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);
    
    return(
        <div>
            <h1>{props.title}</h1>
            <ul className="archives-list">
                <li><a href="">{props.date1}</a></li>
                <li><a href="">{props.date2}</a></li>
                <li><a href="">{props.date3}</a></li>
                <li><a href="">{props.date4}</a></li>
                <li><a href="">{props.date5}</a></li>
            </ul>
        </div>
    );
}

export default List