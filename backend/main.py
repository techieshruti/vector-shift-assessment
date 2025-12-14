from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- Data Models ----------
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# ---------- DAG Check ----------
def is_dag(nodes, edges):
    graph = {node.id: [] for node in nodes}
    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph.get(node, []):
            if not dfs(neighbor):
                return False

        rec_stack.remove(node)
        return True

    return all(dfs(node.id) for node in nodes)

# ---------- API ----------
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges),
    }
