//interface sözde öğesi, tip objeleri oluşturmanın başka bir yoludur. Oluşturacağımızın türün imzasını taşırlar.

interface Point {
    x:number,
    y:number
}

interface Vehicle {
    currentLocation : Point,
    travelTo(point:Point) : void //metodu da bu şekilde tanımlıyorsun ve geriye bir şey döndürmücek demiş oluyorsun. Gövdesini yazmıyorsun geri kalan aynı metotda kullanımı il burada sadece süslü parantezi yazmıyorsun
}

let travelTo = (point:Point) => {
    
}




travelTo ( { x:5 , y:10 } ); //çağırırken de tip objesi olduğu için obje şekinde paramtere geçmek lazım