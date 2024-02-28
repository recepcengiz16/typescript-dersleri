let message;

message="Hello world";

let count = (<string>message).length; //ilk başta atama yapmadığımız için any olarak atama yapıyor. saha sonra bilinçli olarak bu tür demek istiyorsak (<number>degiskenAdi) gibi. Ama message mesela string bir ifade ya dönüştürülebilir şekilde tür ismini yazmalıyız. (<boolean>message) yazamayız çünkü message string bir ifade 

//1. yöntem 
(<string>message).length;

//2. yöntem
(message as string).length;