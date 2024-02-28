//Bizim obje üretebilmemiz için class yapısına ihtiyacımız var. yalnızca interface ile obje üretemiyoruz.
interface Point {
    x:number,
    y:number
}

interface Vehicle {
    currentLocation:Point,
    travelTo(point:Point):void
}


class Taxi implements Vehicle { 

    constructor(location:Point,color?:string){ //color opsiyonel oluyor
        this.currentLocation=location;
        if(typeof color !=="undefined") this.color=color;
    }

    currentLocation: Point;
    color:string;

    travelTo(point: Point): void {
        
        console.log(`Taxi x: ${point.x} konumundan y: ${point.y} konumuna gidiyor.`);
    }

}

let taxi1: Taxi = new Taxi({x:5,y:10},"Red"); 
