function isString(word){
    if (typeof word === "string")
    {return true} 
    else 
    {return false;}
}
;

function isNumber(num){
    if (typeof num === 'number')
    {return true} 
    else {return false}
}
;

function isFunction(param){
    if(typeof param === "function"){return true} else {return false}
}

function isObject(param){
    if(typeof param === "object") {return true} else {return false}
}


function isBoolean(param){
    if (typeof param === 'boolean')
    {return true} 
    else 
    {return false}
}

myArr=[1,2,3,];
function isArray(param){
    if(Array.isArray(param)) {return true}else {return false}}

    const test1 = isString("string")
    const test2 = isNumber(99)
    const test3 = isBoolean(false)
    const test4 = isFunction(function(){})
    const test5 = isArray(myArr)
    const test6 = isObject(myArr)
    
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
console.log(test6)


2 === 2

2 === "2"

2 == "2"