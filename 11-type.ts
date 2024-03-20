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