function add_numbers(numbers : Array<number>) {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    });

    return sum
}

function sub_numbers(numbers : Array<number>) {
    let sum = numbers[0]
    numbers.shift()
    numbers.forEach(number => {
        sum -= number
    });

    return sum
}

function mul_numbers(numbers : Array<number>) {
    let sum = numbers[0]
    numbers.shift()
    numbers.forEach(number => {
        sum *= number
    })

    return sum
}

function div_numbers(numbers : Array<number>) {
    let sum = numbers[0]
    numbers.shift()
    numbers.forEach(number => {
        try {
            sum /= number
        } 
        catch {
            console.log("Something has went wrong while dividing. (Could be trying to divide 0?)")
        }
    })

    return sum
}

let end = mul_numbers([3, 2, 6])
console.log(end)
