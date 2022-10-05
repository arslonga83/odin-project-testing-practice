
import {capitalized, reversed, Calculator} from './practice.js'

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