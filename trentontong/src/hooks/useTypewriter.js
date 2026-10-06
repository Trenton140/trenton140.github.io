import { useEffect, useState } from 'react';

/** Types out each word, holds it, deletes it, then moves on to the next, looping forever. */
export default function useTypewriter(words, { typeMs = 40, deleteMs = 50, holdMs = 1500 } = {}) {
  const [{ index, length, deleting }, setState] = useState({ index: 0, length: 0, deleting: false });
  const word = words[index];

  useEffect(() => {
    const fullyTyped = !deleting && length === word.length;
    let delay = deleting ? deleteMs : typeMs;
    if (fullyTyped) delay = holdMs;

    const timer = setTimeout(() => {
      if (fullyTyped) {
        setState({ index, length, deleting: true });
      } else if (deleting && length === 0) {
        setState({ index: (index + 1) % words.length, length: 0, deleting: false });
      } else {
        setState({ index, length: length + (deleting ? -1 : 1), deleting });
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [index, length, deleting, word, words.length, typeMs, deleteMs, holdMs]);

  return word.slice(0, length);
}
