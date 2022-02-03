function strLength(str){
    if(typeof str !== "string"){
        throw new Error("Nem string tesom")
    }
    return str.length
}

function strUpper(str){
    if(typeof str !== "string"){
        throw new Error("Nem string tesom")
    }
    let arr = str.split(" ").join(" ").split("!").join(" ").split("?").join(" ").split(".").join(" ").split(" ");
    let newarr = [];
    arr.forEach(item => {
        let newstr = item.charAt(0).toUpperCase() + item.slice(1)
        newarr.push(newstr)
    })
    return newarr.join(" ")
}

export {strLength, strUpper}