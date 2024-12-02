const EvenNumbers: React.FC = () => {
    const filterNumbers = (numbers: number[]): number[] => {
        return numbers.filter(x => {return x % 2 === 0})
    }

    return (
        <p>Even Numbers: {filterNumbers([1,2,3,4,5,6,7,8,9,10]).join(', ')}</p>
    )
}

export default EvenNumbers;