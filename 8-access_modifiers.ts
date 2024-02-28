//Bizim obje üretebilmemiz için class yapısına ihtiyacımız var. yalnızca interface ile obje üretemiyoruz.
interface Point {
    x:number,
    y:number
}

interface Vehicle {
    travelTo(point:Point):void
}


class Taxi implements Vehicle { 

     constructor(private location:Point,public color?:string){
         //bu sayede color ve location class içerisinden erişilebilir hale geliyor.
       
    }
    // private color:string; //artık ulaşılamaz oldu dışarıdan
    //public olunca da color da dışarı açık hale geldi

    travelTo(point: Point): void {
        //point.x yerine this.location ile de erişebiliriz.
        console.log(`Taxi x: ${this.location.x} konumundan y: ${this.location.y} konumuna gidiyor.`);
    }

}

let taxi1: Taxi = new Taxi({x:5,y:10},"Red"); 
