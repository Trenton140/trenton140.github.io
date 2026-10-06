import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Gallery from './Gallery.jsx';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

const photoCount = () => screen.getAllByRole('button', { name: /^Show photo/ }).length;
const shownPhoto = () => screen.getByRole('img').getAttribute('alt');

describe('Gallery', () => {
  it('loads every gallery photo', () => {
    render(<Gallery />);
    expect(photoCount()).toBeGreaterThan(1);
    expect(shownPhoto()).toBe(`Travel photography 1 of ${photoCount()}`);
  });

  it('navigates with the arrow buttons and dots, wrapping at the ends', () => {
    render(<Gallery />);
    const total = photoCount();

    fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
    expect(shownPhoto()).toBe(`Travel photography 2 of ${total}`);

    fireEvent.click(screen.getByRole('button', { name: 'Previous photo' }));
    fireEvent.click(screen.getByRole('button', { name: 'Previous photo' }));
    expect(shownPhoto()).toBe(`Travel photography ${total} of ${total}`);

    fireEvent.click(screen.getByRole('button', { name: 'Show photo 3' }));
    expect(shownPhoto()).toBe(`Travel photography 3 of ${total}`);
  });

  it('advances on its own until a control is used', () => {
    vi.useFakeTimers();
    render(<Gallery />);
    const total = photoCount();

    act(() => vi.advanceTimersByTime(8000));
    expect(shownPhoto()).toBe(`Travel photography 2 of ${total}`);

    fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
    act(() => vi.advanceTimersByTime(30000));
    expect(shownPhoto()).toBe(`Travel photography 3 of ${total}`);
  });
});
