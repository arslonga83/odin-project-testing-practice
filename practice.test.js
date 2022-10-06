
import {capitalized, reversed, Calculator, cipher, analyzeArray} from './practice.js'

test('capitalize first letter', () => {
  expect(capitalized('string')).toBe('String');
})

test('already capitalized', () => {
  expect(capitalized('STRING')).toBe('STRING');
})

test('mostly capitalized already', () => {
  expect(capitalized('sTRING')).toBe('STRING');
})

test('reverse string', () => {
  expect(reversed('string')).toBe('gnirts');
})

test('add', () => {
  expect(Calculator.add(2, 5)).toBe(7);
})

test('subtract', () => {
  expect(Calculator.subtract(10, 2)).toBe(8);
})

test('multiply', () => {
  expect(Calculator.multiply(2, 5)).toBe(10);
})

test('divide', () => {
  expect(Calculator.divide(12, 2)).toBe(6);
})

test('basic cipher', () => {
  expect(cipher(1, 'abcdefg')).toBe('bcdefgh');
})

test('ignore punctuation', () => {
  expect(cipher(1, 'ab!cd$ef&g')).toBe('bc!de$fg&h');
})

test('keep same case', () => {
  expect(cipher(5, 'ABcdEf*&^%G')).toBe('FGhiJk*&^%L');
})

test('alphabet wrap', () => {
  expect(cipher(4,'wxYZ')).toBe('abCD');
})

test('negative offset', () => {
  expect(cipher(-5, 'abCde')).toBe('vwXyz');
})

test('ignore spaces', () => {
  expect(cipher(7, 'Hello World!!!')).toBe('Olssv Dvysk!!!');
})

test('analyze', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, 
    min: 1,
    max: 8,
    length: 6
  })
})

