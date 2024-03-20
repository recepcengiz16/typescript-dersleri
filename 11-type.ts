//type sözde öğesi ile tip objeleri oluşturabiliriz. 


type User = {
    name: string;
    age: number
}

let user: User;

user = {name: 'osman', age: 5}

//--------

type Color = {
    name: 'red';
    hex: string;
    contrast: '%40' | '%50'
}

let recep: { name: string; age: number; color: Color, }

recep = {
    name: 'recep',
    age: 5,
    color: {
        name: 'red',
        hex: '123123',
        contrast: "%40",
    }
}

//type sözde öğesi ile fonksiyon parametrelerimizi ve dönüş tipimizi tek bir yerde tanımlayabiliriz.


type Topla = (num1: number, num2: number) => number;

const topla: Topla = (num1, num2) => {
    return num1 + num2;
}

//veya fonksiyonlarda aşağıdaki gibi kullanabiliriz.

type FullName = {
    name: string;
    surname: string;
}

const getFullName = (params: FullName) => {
    console.log(params.name + params.surname)
}