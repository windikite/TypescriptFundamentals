const ColorList: React.FC = () => {
    const listOfColors: string[] = ['red', 'blue', 'green'];

    return (
        <div>
            <h1>Assignment 2</h1>
            <p>List of colors:</p>
            <ul>
                {listOfColors.map(x => {return <li>{x}</li>})}
            </ul>
            
        </div>
    )
}

export default ColorList;