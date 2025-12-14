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
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{
          width: '100%',
          resize: 'none',
          overflow: 'hidden',
          fontSize: 13,
          lineHeight: '18px',
          padding: 6,
          borderRadius: 6,
          border: '1px solid #d1d5db',
        }}
      />
    </BaseNode>
  );
};
