export function reverseArray (collection: number[]): number[] {
  let temp_collection: number[] = [];
  for (let i = collection.length - 1; i >= 0; i--) {
    temp_collection.push(collection[i]!);
  }
  return temp_collection
}

export function merge (collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  collection_2 = reverseArray(collection_2)

  let i = 0;
  let j = 0;
  let k = 0;
  let result_collection: number[] = [];

  while (i < collection_1.length || j < collection_2.length || k < collection_3.length) {
    // choose a min element from the collections at pointers
    let value1: number = (i < collection_1.length) ? collection_1[i]! : Infinity;
    let value2: number = (j < collection_2.length) ? collection_2[j]! : Infinity;
    let value3: number = (k < collection_3.length) ? collection_3[k]! : Infinity;
    let comparing_values: number[] = [value1, value2, value3]

    let minIndex: number = comparing_values.indexOf(Math.min(...comparing_values))
    result_collection.push(comparing_values[minIndex]!)
    if (minIndex==0) i++;
    else if (minIndex==1) j++;
    else k++;
  }

  return result_collection;
}

console.log(merge([-5,-1,2,4,6,7], [3,1,-2], [-10,3]))