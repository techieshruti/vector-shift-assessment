import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
}) => {
  return (
    <div
      style={{
        width,
        padding: 10,
        border: '1px solid #333',
        borderRadius: 8,
        background: '#fff',
      }}
    >
      {/* Header */}
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
        {title}
      </div>

      {/* Input Handles */}
      {inputs.map((input) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{ top: '50%' }}
        />
      ))}

      {/* Custom Content */}
      <div>{children}</div>

      {/* Output Handles */}
      {outputs.map((output) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
        />
      ))}
    </div>
  );
};
