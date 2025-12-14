import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={['prompt']}
      outputs={['response']}
    >
      <div style={{ fontSize: 12 }}>
        Large Language Model
      </div>
    </BaseNode>
  );
};
