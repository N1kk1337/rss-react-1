import React from 'react';

export interface EmojiCounterProps {
  emoji: string;
  count: number;
}

const EmojiCounter: React.FC<EmojiCounterProps> = ({ emoji, count }) => {
  const emojis = Array.from({ length: count }, (_, i) => <span key={i}>{emoji}</span>);
  return <span>{emojis}</span>;
};

export default EmojiCounter;
