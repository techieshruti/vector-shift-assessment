import { BaseNode } from './BaseNode';

export const OutputNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={['input']}
    >
      <div style={{ fontSize: 12 }}>
        Output Target
      </div>
    </BaseNode>
  );
};
