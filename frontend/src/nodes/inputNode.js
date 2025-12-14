import { BaseNode } from './BaseNode';

export const InputNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={['output']}
    >
      <div style={{ fontSize: 12 }}>
        Input Source
      </div>
    </BaseNode>
  );
};
