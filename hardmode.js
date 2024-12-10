let arr = ['2235', '5513', '4232', '813', '1235', '551', '223'];
console.log(arr);
for (let i = 0; i < 7; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

// copy. Это задание выполнено не самостоятельно(пытался разобраться, безуспешно)
nextPrime: for (var i = 2; i < 100; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(`${i}: ` + `Делитель числа 1 и ${i}`); // простое
}
