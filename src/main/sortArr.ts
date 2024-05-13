const collection_1: number[] = [ 8, 9, 10, 12];
const collection_2: number[] = [ 15, 13, 11];
const collection_3: number[] = [ 1, 2, 3, 4];

export function sort(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const collections: number[] = [...collection_1, ...collection_2, ...collection_3];

  let size: number = collections.length;
  let key, j: number;

  // print before sort
  console.log("before sort : "+collections)

  for (let i = 1 ; i < size ; i++) {
    key =  collections[i];
    j = i - 1;
    while (j >= 0 && collections[j] > key) {
      collections[j + 1] = collections[j];
      j = j - 1;
    }
    collections[j + 1] = key;
  }

  return collections;
}

// print + call function
console.log("after sort  : "+sort(collection_1, collection_2, collection_3));