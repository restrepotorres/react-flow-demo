import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeToolbar,
  NodeResizer,
  Connection,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import MyNodo from "./MyNodo";

const styles = {
  width: "80vw",
  height: "90vh",
};

const initialNodes = [
  {
    id: "idlogica1",
    position: { x: 0, y: 100 },
    data: { label: <MyNodo nombre="logica I" creditos={3} /> },
  },
  {
    id: "idlogica2",
    position: { x: 200, y: 100 },
    data: {
      label: <MyNodo nombre="logica II" creditos={3} />,
    },
    className: "algoritmia",
  },
];

const initialEdges = [{ id: "e1-2", source: "idlogica1", target: "idlogica2" }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <div style={styles}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />

          <NodeResizer />
          <NodeToolbar />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
      <button
        onClick={() => {
          setNodes(initialNodes);
        }}
      ></button>
    </>
  );
}

export default App;
