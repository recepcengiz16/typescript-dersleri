import { Taxi } from "./Taxi"; //bu şekilde import edilecek

let taxi1: Taxi = new Taxi({x:5,y:10},"Red"); 

taxi1.location= {x:5,y:10}; //get ve set ile nasıl tanımladıysak o şekilde erişip veri atayabiliriz.
let myLocation = taxi1.location;

