import { strLength as length, strFullUpper as upper, strUpper as uppertwo } from "./sublevel.js";


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


console.log(uppertwo("valami valamit csinál.", "ez azt csinál."))

try{
    (uppertwo(1))
}
catch(error){
    console.log(error)
}