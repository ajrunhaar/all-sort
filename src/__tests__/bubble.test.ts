import {bubble} from '../index'

test ('Bubble sort',()=>{
  const numberArray = [1,2,3,4];
  const sortedNumberArray = bubble<number>(numberArray);
  expect(sortedNumberArray).toEqual(numberArray);
});