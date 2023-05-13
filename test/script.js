let matrix = []

for (i = 0; i < 20; i++) {
    matrix.push([])
    for (
        p = 0; p < 20; p++
    ) {
        matrix[i].push(p)
    }
}
console.log(matrix)

for (let p = 0; p < 20; p++) {
    matrix[11].push(0)
    matrix[11].shift()
    
}

console.log(matrix)