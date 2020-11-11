export default function radixSort(vetor) {
  let arr = [...vetor];
  let trocas = 0;

  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);
    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
      trocas++;
    }
    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return trocas;
}
