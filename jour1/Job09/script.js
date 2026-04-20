function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    }
    return numbers;
}

console.log(tri([1, 2, 3, 4, 5], "asc"));
console.log(tri([1, 2, 3, 4, 5], "desc"));