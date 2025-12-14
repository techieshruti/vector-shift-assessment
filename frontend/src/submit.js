import { useStore } from './store';

export const submitPipeline = async () => {
  const { nodes, edges } = useStore.getState();

  const response = await fetch('http://localhost:8000/pipelines/parse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nodes: nodes.map((n) => ({ id: n.id })),
      edges: edges.map((e) => ({
        source: e.source,
        target: e.target,
      })),
    }),
  });

  const result = await response.json();

  alert(
    `Pipeline Submitted!\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
  );
};
