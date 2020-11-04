function merge(left, right) {
  let result = [],
      leftLen = left.length,
      rightLen = right.length,
      l = 0,
      r = 0;
  while (l < leftLen && r < rightLen) {
      if (left[l] < right[r]) {
          result.push(left[l]);
          l++;
      } else {
          result.push(right[r]);
          r++;
      }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
};

export default function mergeSort(array) {
  const newArray = array;
  let len = newArray.length;
  if (len < 2) {
      return newArray;
  }
  let mid = Math.floor(len / 2),
      left = newArray.slice(0, mid),
      right = newArray.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};