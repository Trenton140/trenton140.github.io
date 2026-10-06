import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';
import EntryList from './EntryList.jsx';

afterEach(cleanup);

it('renders a logo and each sub-section with its own dates and bullet points', () => {
  const { container } = render(
    <EntryList
      entries={[
        {
          title: 'Associate',
          org: 'Bank',
          dates: '2026 – Present',
          logo: 'td',
          sections: [
            { heading: 'Team B', dates: 'Oct – Present' },
            { heading: 'Team A', dates: 'Jan – Sep', points: ['Did a thing'] },
          ],
        },
      ]}
    />,
  );

  const card = screen.getByRole('article');
  expect(container.querySelector('img')?.getAttribute('src')).toBeTruthy();
  const headings = within(card).getAllByRole('heading', { level: 4 });
  expect(headings.map((h) => h.textContent)).toEqual(['Team BOct – Present', 'Team AJan – Sep']);
  expect(within(card).getByRole('listitem').textContent).toBe('Did a thing');
});
