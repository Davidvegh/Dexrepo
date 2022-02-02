class Allat{
    constructor(fajta, szin){
        this.fajta = fajta;
        this.szin = szin;
    }

    get xfajta(){
        return this.fajta.toUpperCase();
    }

    set xfajta(value){
        this.fajta = value;
    }

    static express(){
        console.log("Ez egy static metódus");
    }
}

let kutya = new Allat();

kutya.xfajta = "mudi";

console.log(kutya.xfajta);

Allat.express();


class Shape { 
    constructor(a) { 
       this.Area = a
    } 
 } 
 class Circle extends Shape { 
    disp() { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 } 
 var obj = new Circle(223); 
 obj.disp() 