import { act, renderHook } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import useTypewriter from './useTypewriter.js';

afterEach(() => vi.useRealTimers());

it('types a word, holds it, deletes it, then types the next', () => {
  vi.useFakeTimers();
  const { result } = renderHook(() =>
    useTypewriter(['ab', 'c'], { typeMs: 10, deleteMs: 10, holdMs: 100 }),
  );
  const step = (ms) => act(() => vi.advanceTimersByTime(ms));

  expect(result.current).toBe('');
  step(10);
  expect(result.current).toBe('a');
  step(10);
  expect(result.current).toBe('ab');
  step(100); // hold ends, deleting begins
  expect(result.current).toBe('ab');
  step(10);
  expect(result.current).toBe('a');
  step(10);
  expect(result.current).toBe('');
  step(10); // move to the next word
  step(10);
  expect(result.current).toBe('c');
});
