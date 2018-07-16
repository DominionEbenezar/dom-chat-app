const expect = require('expect');

//import isRealstring
const{isRealString} = require('./validation');
describe('isRealStriing', () =>{
    it('should reject non-string values', () =>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () =>{
        var res = isRealString('    ');
        expect(res).toBe(false);
    });
    it('should allow string with non-space character', () =>{
        var res = isRealString('  Dominion  ');
        expect(res).toBe(true);
    });
});