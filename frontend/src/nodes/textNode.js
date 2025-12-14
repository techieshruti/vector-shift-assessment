import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={['input']}
      outputs={['output']}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%' }}
      />
    </BaseNode>
  );
};
