import { strLength as length, strUpper as upper } from "./sublevel.js";

console.log(length("kutya"));

try{
    (length(1))
}
catch(error){
    console.log(error)
}

console.log(upper("cica kutya!ló?valami.random"));

try{
    (upper(1))
}
catch(error){
    console.log(error)
}