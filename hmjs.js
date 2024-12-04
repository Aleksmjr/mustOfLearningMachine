// if else (if ru - russian words, if eu - eng words)
let lang = 'ru';
let arr;

if (lang == 'ru') {
  arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
} else if (lang == 'eu') {
  arr = ['monday', 'tuesday', 'wd', 'th', 'fr', 'st', 'sn'];
}

console.log(arr);
//switch-case
switch (lang) {
  case 'ru':
    console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
    break;
  case 'eu':
    console.log('monday', 'tuesday', 'wd', 'th', 'fr', 'st', 'sn');
    break;
}
// n-mas[]
let langAll = {
  ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'все'],
  eu: ['monday', 'tuesday', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(langAll[lang]);
// namePerson
let namePerson = '';
namePerson === 'Артем'
  ? console.log('Директор')
  : namePerson === 'Михаил'
  ? console.log('Препод')
  : console.log('студент');
