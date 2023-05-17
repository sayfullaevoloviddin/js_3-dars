/* JS data types: objects*/
/*let arrayObject = [45,78,'Salom','matn',true,false]

console.log(arrayObject[2])*/

/*
let oddiyObject = {ism:"Oloviddin", yoshi: 19,};

let talabami = ' Yoq, talaba emas';
if (oddiyObject.yoshi > 17){
    talabami = ' Ha, talaba'
}
console.log("Olov talabami ?" + talabami);*/

/*
let oddiyObject = {parol: 12};

let kirish = " Parolingiz kamida 8ta belgidan iborat bo'lishi kerak.";
if (oddiyObject.parol > 8){
    kirish = " Parolingizdagi belgilar yetarli, ro'yxatdan o'tdingiz.";
}
else {
    kirish
}
console.log('********' + kirish);
*/
/*let x = 6
let y = 8

if(x === y){
    console.log(x + y)
}else if (x || y){
    console.log(x - y)
} else{
    console.log(x * y)
}*/
let sana = new Date();

sana.setFullYear( 2007);
sana.setMonth(4)
sana.setDate(3)
let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakun = sana.getDay();
let hours = sana.getHours();

let oylar = ["Yanvar", "Fevral","Mart","Aprel","May","Iyun", "Iyul",
    "Avgust", "Sentyabr", "Oktyabr", "Noyabr" , "Dekanr"];
let kunlar = ["Yakshanba","Dushanba", "Seshanba", "Chorshanba","Payshanba" , "Juma" , "Shanba",];
document.write("Men " + yil + "-yilning " + oylar[oy] +" oyining "+ kun +"-kunida tugilganman. Haftaning " + "esa "
    + kunlar[haftakun] +" kuni edi.");



































































































