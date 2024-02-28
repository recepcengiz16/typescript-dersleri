//Bizim obje üretebilmemiz için class yapısına ihtiyacımız var. yalnızca interface ile obje üretemiyoruz.
interface Point {
    x:number,
    y:number
}

interface Vehicle {
    currentLocation:Point,
    travelTo(point:Point):void
}


class Taxi implements Vehicle { //class ile bir şablon oluşturmuş oluyoruz
    currentLocation: Point;
    travelTo(point: Point): void {
        //metot şeklinde yazmak lazım class içerisinde ama interface de gövdesini belirtmiyoruz çünkü imzası oluyor interface
        console.log(`Taxi x: ${point.x} konumundan y: ${point.y} konumuna gidiyor.`);
    }

}