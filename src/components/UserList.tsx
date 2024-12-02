const UserList: React.FC = () => {
    type user = {
        name: string,
        age: number
    }

    const users: user[] = [
        {name: 'Jimmy', age: 31},
        {name: 'Bobby', age: 45},
        {name: 'Johnny', age: 27},
    ]

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(x => {return <li>{x.name} - {x.age} years old</li>})}
            </ul>
        </div>
    )
}

export default UserList;