function free(text) {
  if (typeof text !== 'string') {
    alert('ALARM ALARM, its not stringi');
  }

  if (typeof text === 'string' && text.length > 30) {
    return text.trim().slice(0, 30) + '...';
  }
}
console.log(
  free(
    '      1 2 2 2 2 asdassadjhvbsdfhvbskdjfhbvskdjfhvbsdkjhvbsdkjhvbsdfjkhvbsdfjkvhbsdfkjhvbsdd       ',
  ),
);
