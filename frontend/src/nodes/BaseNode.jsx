import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 220,
}) => {
  return (
    <div
      style={{
        width,
        background: '#ffffff',
        borderRadius: 10,
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        fontSize: 13,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '8px 12px',
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 600,
          background: '#f9fafb',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        {title}
      </div>

      {/* Body */}
      <div style={{ padding: 12 }}>
        {children}
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{
            top: `${30 + index * 20}px`,
            background: '#2563eb',
            width: 10,
            height: 10,
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{
            top: `${30 + index * 20}px`,
            background: '#16a34a',
            width: 10,
            height: 10,
          }}
        />
      ))}
    </div>
  );
};
