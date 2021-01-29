let str = 'Hello';
    sum = 123;
    num = 15.8;
    flag = true;
    txt = 'true';

console.log(typeof str);
console.log(typeof sum);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

let a1 = 5 % 3;
    a2 = 3 % 5;
    a3 = 5 + '3';
    a4 = '5' - 3;
    a5 = 75 + 'kg';
    a6 = 785 * 653;
    a7 = 100 / 25;
    a8 = 0 * 0;
    a9 = 0 / 2;
    a10 = 89 / 0;
    a11 = 98 + 2;
    a12 = 5 - 98;
    a13 = (8 + 56 * 4) / 5;
    a14 = (9 - 12) * 7 / (5 + 2);
    a15 = +'123';
    a16 = 1 || 0;
    a17 = false || true;
    a18 = true > 0;

console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);
console.log(typeof a8);
console.log(typeof a9);
console.log(typeof a10);
console.log(typeof a11);
console.log(typeof a12);
console.log(typeof a13);
console.log(typeof a14);
console.log(typeof a15);
console.log(typeof a16);
console.log(typeof a17);
console.log(typeof a18);

const p = 3.1415;

function getSPryam() {
    const width = 10;
    const heigh = 23;
    const SPryam = width * heigh;
    return SPryam;
}
console.log(getSPryam());

function getVCilindra() {
    const h = 10;
    const r = a7 / 2;
    const VCilindra = p * Math.pow(r, 2) * h;
    return VCilindra;  
}
console.log(getVCilindra());

function getSKruga() {
    const r = 5;
    const SKruga = p * Math.pow(r, 2);
    return SKruga;
}
console.log(getSKruga());

function getSTrap() {
    const a = 5;
    const b = 7;
    const h = 10;
    const STrap = ((a + b) / 2) * h;
    return STrap;
}
console.log(getSTrap());

function getPereplata() {
    const s = 2000000;
    const p = 10;
    const years = 5;
    const size = p / 100 / 12;
    const plata = (s * size) / (1 - Math.pow((1 + size), -60));
    const sum = plata * years * 12;
    const Pereplata = sum - s;
    return Pereplata;
}
console.log(getPereplata());

function getX() {
    const a = 8;
    const b = 3;
    const firstX = (16 - a + 2 * b) / 2;
    return firstX;
}
console.log(getX());

function getText() {
    const text = `
    Бывало, спит у ног собака,
    костер занявшийся гудит,
    и женщина из полумрака
    глазами зыбкими глядит.

    Потом под пихтою приляжет
    на куртку рыжую мою
    и мне, задумчивая, скажет:

    "А ну-ка, спой!.."- и я пою.
    `
    return text;
}
console.log(getText());
