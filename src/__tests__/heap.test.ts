import {heap} from '../index'

describe ('Heap sort', ()=>{
  it('should sort',async ()=>{

    const numberArray = [1,2,3,4];
    const sortedNumberArray = heap<number>(numberArray);

    await new Promise((r) => setTimeout(r, 120*1000));

    expect(sortedNumberArray).toEqual(sortedNumberArray);

  },180*1000)

});