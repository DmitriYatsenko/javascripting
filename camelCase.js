const camelCase = function(input) {
    let result = "";

    while (input[0] === " ")
    {
        input = input.slice(1);
    }

    for (let w = 0; w < input.length; w++)
    {
        if (input[w] === " ")
        {
            result += "";
        }
        else if (input[w-1] === " ")
        {
            result += input[w].toUpperCase();
        }
        else
        {
            result += input[w].toLowerCase();
        }
    }
    return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));