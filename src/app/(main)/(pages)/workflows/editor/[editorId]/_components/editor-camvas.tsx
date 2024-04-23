"use client";
import { EditorCanvasCardType, EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  NodeChange,
  ReactFlowInstance,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const EditorCanvas = () => {
  return <div>Editor Canvas</div>;
};

export default EditorCanvas;
