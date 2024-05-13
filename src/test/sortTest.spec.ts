import { sort } from '../main/sortArr'

describe('testing index file', () => {
  it('result should be sorted in ascending', () => {
    const collection_1: number[] = [3, 4, 7, 11];
    const collection_3: number[] = [7, 1, 0];
    const collection_2: number[] = [5, 5, 6, 14];

    const expectResult: number[] = [0, 1, 3, 4, 5, 5, 6, 7, 7, 11, 14];
    const result: number[] = sort(collection_1, collection_2, collection_3);

    expect(result).toEqual(expectResult);
  });
});