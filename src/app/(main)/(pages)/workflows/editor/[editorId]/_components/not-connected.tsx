import React from "react";

interface NotConnectedProps {
  content?: string
} 

export const NotConnected = ({content}: NotConnectedProps) => {
  return <p className="flex items-center justify-center p-5">{content}</p>;
};
