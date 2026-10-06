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

  it('changes photo on a horizontal swipe but not on a vertical scroll', () => {
    render(<Gallery />);
    const total = photoCount();
    const frame = screen.getByRole('img').closest('[aria-live]');
    const swipe = (from, to) => {
      fireEvent.touchStart(frame, { touches: [{ clientX: from[0], clientY: from[1] }] });
      fireEvent.touchEnd(frame, { changedTouches: [{ clientX: to[0], clientY: to[1] }] });
    };

    swipe([300, 100], [150, 110]); // swipe left -> next
    expect(shownPhoto()).toBe(`Travel photography 2 of ${total}`);
    swipe([100, 100], [250, 90]); // swipe right -> previous
    expect(shownPhoto()).toBe(`Travel photography 1 of ${total}`);
    swipe([200, 300], [180, 100]); // mostly vertical -> ignored
    expect(shownPhoto()).toBe(`Travel photography 1 of ${total}`);
  });

  it('keeps the previous photo underneath until the new one has faded in', () => {
    render(<Gallery />);
    const framePhotos = () =>
      screen.getAllByRole('img', { hidden: true, name: /^Travel photography/ });

    fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
    // Both photos are in the frame; only the incoming one is exposed to assistive tech.
    expect(framePhotos()).toHaveLength(2);
    expect(shownPhoto()).toBe(`Travel photography 2 of ${photoCount()}`);

    const incoming = screen.getByRole('img');
    fireEvent.load(incoming);
    // jsdom has no AnimationEvent, so React listens for the prefixed event name there.
    fireEvent(incoming.parentElement, new Event('webkitAnimationEnd', { bubbles: true }));
    expect(framePhotos()).toHaveLength(1);
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
