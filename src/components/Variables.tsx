const Variables: React.FC = () => {
    let greeting: string = 'Hello, TypeScript!';
    let numberList: number[] = [5, 10, 15];

    const calculateSum = (a: number, b: number): number => {
        return a + b
    }


    return (
        <div>
            <h1>Assignment 1</h1>
            <p>Greeting: {greeting}</p>
            <p>List of Numbers: {numberList.join(', ')}</p>
            <p>1 + 1 = {calculateSum(1, 1)}</p>
        </div>
    )
}

export default Variables;