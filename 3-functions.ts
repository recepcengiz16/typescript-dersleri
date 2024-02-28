function getAvarage( a:number , b:number , c?: number ) :string { 
    //:string dediğimiz de fonks dan dönecek değerin tipini belirtir. Eğer geriye bir değer döndürmesini istemiyorsak :void yazabiliriz
    //c değeri optional yani isteğe bağlı, gelebilir de gelmeyebilir de.
    
    let res;

    if(typeof c !=="undefined"){
        res=(a+b+c)/3;
    }else{
        res=(a+b)/2;
    }

    return "result:" +res;
}

getAvarage(10,20,30);

const parametreSayisiBelliDegilse = (...params:number[]):string => {
    //gelecek olan parametre sayısı belli değilse böyle yapabiliriz
    let total=0;

    params.forEach(x=>{
        total+=x;
    })

    return "Sonuç: "+total;
}

parametreSayisiBelliDegilse(10);
parametreSayisiBelliDegilse(10,50,60,65);