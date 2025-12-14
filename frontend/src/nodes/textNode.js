import { useState } from 'react';
import { BaseNode } from './BaseNode';

const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};


export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  // Auto-resize textarea
  const textareaRef = useRef(null);
  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [text]);

const inputs = useMemo(() => extractVariables(text), [text]);

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
