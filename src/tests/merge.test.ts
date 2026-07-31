import { expect, test } from 'vitest'
import { merge } from '../index.js'

test('general merge case', () => {
  expect(merge([1,2,2], [3,2,1], [1,2,3])).toEqual([1,1,1,2,2,2,2,3,3])
})

test('one empty collection', () => {
  expect(merge([1,2,3], [3,2,1], [])).toEqual([1,1,2,2,3,3])
})

test('two empty collections', () => {
  expect(merge([1,2,3], [], [])).toEqual([1,2,3])
})

test('all empty collections', () => {
  expect(merge([], [], [])).toEqual([])
})

test('all empty collections', () => {
  expect(merge([1], [2], [3])).toEqual([1,2,3])
})

test('different length collections', () => {
  expect(merge([1,2,4,5,6,7], [3,2,1], [3, 10])).toEqual([1,1,2,2,3,3,4,5,6,7,10])
})

test(' negative numbers', () => {
  expect(merge([-5,-1,2,4,6,7], [3,1,-2], [-10,3])).toEqual([-10,-5,-2,-1,1,2,3,3,4,6,7])
})