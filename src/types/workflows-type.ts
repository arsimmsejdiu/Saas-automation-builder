import { Option } from "@/interface/workflows-interface";
import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { CSSProperties } from "react";
import { HandleProps } from "reactflow";

export type ContentBasedOnTitleTypes = {
  nodeConnection: ConnectionProviderProps;
  newState: EditorState;
  file: any;
  setFile: (file: any) => void;
  selectedSlackChannels: Option[];
  setSelectedSlackChannels: (value: Option[]) => void;
};

export type ActionButtonTypes = {
  currentService: string;
  nodeConnection: ConnectionProviderProps;
  channels?: Option[];
  setChannels?: (value: Option[]) => void;
};

export type WorkFlowTypes = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

export type CustomModalTypes = {
  title: string;
  subheading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export type WorkflowformTypes = {
  title?: string;
  subTitle?: string;
};

export type CustomHandleTypes = HandleProps & { style?: CSSProperties };

export type FlowInstanceTypes = {
  children: React.ReactNode;
  edges: any[];
  nodes: any[];
};

export type RenderOutputAccordionTypes = {
  state: EditorState;
  nodeConnection: ConnectionProviderProps;
};
