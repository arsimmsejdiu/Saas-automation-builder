import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useFuzzieStore } from "@/store";
import { RenderOutputAccordionTypes } from "@/types/workflows-type";
import React from "react";
import ContentBasedOnTitle from "./content-based-on-title";

const RenderOutputAccordion = ({
  state,
  nodeConnection,
}: RenderOutputAccordionTypes) => {
  const {
    googleFile,
    setGoogleFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
  } = useFuzzieStore();

  return (
    <ContentBasedOnTitle 
        nodeConnection={nodeConnection}
        newState={state}
        file={googleFile}
        setFile={setGoogleFile}
        selectedSlackChannels={selectedSlackChannels}
        setSelectedSlackChannels={setSelectedSlackChannels}
    />
  )
};

export default RenderOutputAccordion;
