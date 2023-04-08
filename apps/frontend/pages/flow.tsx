import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import axios from 'axios';

import {
  nodes as initialNodes,
  edges as initialEdges,
} from '../components/flowConstant';

import 'reactflow/dist/style.css';

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = ({ users }) => {
  const userNodes: any = users.map((user, index) => ({
    id: String(index),
    type: 'default',
    data: {
      label: user.email,
    },
    position: { x: 250, y: index * 100 },
  }));

  const userEdges: any = users.map((user, index) => ({
    id: 'e1-3',
    source: '1',
    target: String(index),
    animated: true,
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(
    userNodes.length > 0 ? userNodes : initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    userEdges.length > 0 ? userEdges : initialEdges
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="container mx-auto">
      <div className="w-full h-80">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
        >
          <MiniMap style={minimapStyle} zoomable pannable />
        </ReactFlow>
      </div>
    </div>
  );
};

export default OverviewFlow;
export const getStaticProps = async () => {
  const users: any = await axios.get(`${process.env.FRONTEND_URL}api/users/`);

  return {
    props: {
      users: users.data,
    },
  };
};
