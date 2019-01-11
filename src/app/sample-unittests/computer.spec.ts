import { Computer } from "./computer";

fdescribe('Computer', ()=>
{

it('should add two positive numbers', ()=>
{
    expect(Computer(1, 2)).toBe(3);
});

xit('should return 0 if any number is negative', () =>
{
    expect(Computer(-1, 2)).toBe(0);
})



});