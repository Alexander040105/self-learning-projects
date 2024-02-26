function Food(){
    const food1 = 'adobo'
    const food2 = 'sinigang'

    return(
        <ul>
            <li>Hatdog</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;