interface Point {
    x:number,
    y:number
}

// export interface Point { bu şekilde de interface i de export edebiliriz.
//     x:number,
//     y:number
// }

interface Vehicle {
    travelTo(point:Point):void
}


export class Taxi implements Vehicle { 

     constructor(private _location:Point,public _color?:string){          
    }
  
    travelTo(point: Point): void {
        //point.x yerine this.location ile de erişebiliriz.
        console.log(`Taxi x: ${this._location.x} konumundan y: ${this._location.y} konumuna gidiyor.`);
    }

    get location(){ //propertyleri bu şekilde tanımlarız
        return this._location;
    }

    set location(value:Point){
        if (value.x<0 || value.y<0) {
            throw new Error("Koordinat bilgileri negatif olamaz");
        }
        this._location=value;
    }

}