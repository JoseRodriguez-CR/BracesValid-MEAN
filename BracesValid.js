function bracesValid(braces){
    var bracesArray = [];
    for (var i = 0; i < braces.length; ++i){
        if(braces[i] === "(" || braces[i] === "[" || braces[i] === "{"){
            bracesArray.push(braces[i]);
            //console.log(bracesArray)
        }
        else {
            if(bracesArray.length === 0) {
            return false;
            }
            //console.log(bracesArray.length);
            let lastValue = bracesArray[bracesArray.length-1];
            //console.log(lastValue);
            if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')){
                bracesArray.pop();
            }
            
        }
    }
    return bracesArray.length === 0
}

console.log(bracesValid( "()" )) // true
console.log(bracesValid( "{{()}}[]" )) // true
console.log(bracesValid( "{(})" )) //false