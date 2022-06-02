const multiplicationTable = function(maxValue) {
let row = "";
let table = "";

for (let v = 1; v <= maxValue; v++)
{
    row = "";
    for (let w = 1; w <= maxValue; w++)
    {
        row += ((v*w).toString() + " ");
    }
    table += (row + "\n");
}

return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));