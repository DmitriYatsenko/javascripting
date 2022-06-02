const repeatNumbers = function(data) {
    let answer = "";
    let result = [];
    for(let v = 0; v < data.length; v++)
    {
        answer = "";
        for(let w = 0; w < data[v][1]; w++)
        {
            answer += data[v][0].toString();
        }
        result.push(answer);
    }
    return result.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));