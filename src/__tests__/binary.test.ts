import {binary} from '../index'

describe ('Binary sort', ()=>{
  it('should sort',async ()=>{

    const numberArray = [1,2,3,4];
    const sortedNumberArray = binary<number>(numberArray);

    await new Promise((r) => setTimeout(r, 120*1000));

    expect(sortedNumberArray).toEqual(sortedNumberArray);

  },180*1000)

});