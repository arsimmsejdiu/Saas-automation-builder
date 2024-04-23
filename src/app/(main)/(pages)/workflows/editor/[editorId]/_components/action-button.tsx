import React, { useCallback } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ActionButtonTypes } from "@/types/workflows-type";

const ActionButton = ({
  currentService,
  nodeConnection,
  channels,
  setChannels,
}: ActionButtonTypes) => {
  const renderActionButton = () => {
    switch (currentService) {
      case "Discord":
        return (
          <>
            <Button variant="outline" onClick={() => {}}>
              Test Message
            </Button>
            <Button onClick={() => {}} variant="outline">
              Save Template
            </Button>
          </>
        );

      case "Notion":
        return (
          <>
            <Button variant="outline" onClick={() => {}}>
              Test
            </Button>
            <Button onClick={() => {}} variant="outline">
              Save Template
            </Button>
          </>
        );

      case "Slack":
        return (
          <>
            <Button variant="outline" onClick={() => {}}>
              Send Message
            </Button>
            <Button onClick={() => {}} variant="outline">
              Save Template
            </Button>
          </>
        );

      default:
        return null;
    }
  };

  return renderActionButton();
};

export default ActionButton;
