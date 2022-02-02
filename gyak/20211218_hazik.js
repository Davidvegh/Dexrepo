let person={
    nev:"",
    email:"",
    tel:"",
    web:"",
    cim:"",
    szulEv:""
}

while(person.cim==""||person.email==""||person.nev==""||person.szulEv==""||person.tel==""||person.web=="")
{

    if(person.nev=="") person.nev=prompt("Adjál nevet"); 
    if(person.email=="") person.email=prompt("Adjál emailt"); 
    if(person.tel=="") person.tel=prompt("Adjál telt"); 
    if(person.web=="") person.web=prompt("Adjál webet"); 
    if(person.cim=="") person.cim=prompt("Adjál cim"); 
    if(person.szulEv=="") person.szulEv=prompt("Adjál szuleve"); 
}
console.log(person)