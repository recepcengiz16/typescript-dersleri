let a; //böyle yapınca any oluyor ve buna isteğin değeri atayıp daha sonra tipi farklı değer atayabiliyorsun

a=5;
a="Merhaba";
a=true;

let b:number;
let c:string="Deneme"; //tanmlandığı satırda da atama yapılabilir
let d:boolean;
let e:any; //ilk başta bir tip belirlemek istemiyorum demek, her tipten atama yapabilirsin ve daha sonra farklı bir tipte değer atayabilirsin.
let f:number[]=[1,2,3,4]; //dizi ataması
let g:Array<number> = [1,2,4]; // bu şekilde de yapıp dizi tipini <> arasında belirleriz.

let h:any[] = [1,"Deneme"]; //bu şekilde de tanımlama yapılabilir.

let k:[string,number,boolean]= ["deneme",4,true]; // bu tip sıralaması ile atama yap diyebiliriz diziye. Bunun adı da tuple

b=5;
//b=""; böyle olunca hatalı oluyor

enum Payment { //normal c# daki enum yapısı ve js koduna çevrilirken function olarak gider.
    kredi,
    havale=2
}

let kredi=Payment.kredi; //atama yapılırken 0. indisten başladığı için kredi 0 olur 