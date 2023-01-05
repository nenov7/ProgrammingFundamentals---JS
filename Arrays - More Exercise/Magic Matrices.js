function magicMatrices(arr) {
    let matrix = arr.map(row => row.split(' ').filter(x => x != '').map(Number));
    let sum = 0;
    matrix[0].forEach(x => sum += x);
    for (let rows = 1; rows < matrix.length; rows++) {
        let rowSum = 0;
        matrix[rows].forEach(x => rowSum += x);
        if (rowSum != sum)	return false;
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++)
            colSum += matrix[row][col];
        if (colSum != sum)	return false;
    }
    return true;
}

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);