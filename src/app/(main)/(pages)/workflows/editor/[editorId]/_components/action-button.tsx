import React, { useCallback } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ActionButtonTypes } from "@/types/workflows-type";
import { postContentToWebHook } from "@/app/(main)/(pages)/connections/_actions/discord-connection";
import { onCreateNewPageInDatabase } from "@/app/(main)/(pages)/connections/_actions/notion-connection";
import { postMessagesToSlack } from "@/app/(main)/(pages)/connections/_actions/slack-connection";

const ActionButton = ({
  currentService,
  nodeConnection,
  channels,
  setChannels,
}: ActionButtonTypes) => {
  const pathname = usePathname();

  const onSendDiscordMEssage = useCallback(async () => {
    const response = await postContentToWebHook(
      nodeConnection.discordNode.content,
      nodeConnection.discordNode.webhookURL
    );

    if (response.message === "success") {
      nodeConnection.setDiscordNode((prev: any) => ({
        ...prev,
        content: "",
      }));
    }
  }, [nodeConnection.discordNode]);

  const onStoreNotionContent = useCallback(async () => {
    console.log(
      nodeConnection.notionNode.databaseId,
      nodeConnection.notionNode.accessToken,
      nodeConnection.notionNode.content
    );
    const response = await onCreateNewPageInDatabase(
      nodeConnection.notionNode.databaseId,
      nodeConnection.notionNode.accessToken,
      nodeConnection.notionNode.content
    );

    if (response) {
      nodeConnection.setNotionNode((prev: any) => ({
        ...prev,
        content: "",
      }));
    }
  }, [nodeConnection.notionNode]);

  const onStoreSlackContent = useCallback(async () => {
    const response = await postMessagesToSlack(
      nodeConnection.slackNode.slackAccessToken,
      channels!,
      nodeConnection.slackNode.content
    );
    if(response.message === "Success") {
      toast.success("Message sent successfully");
      nodeConnection.setSlackNode((prev: any) => ({
        ...prev,
        content: "",
      })); 
    } else {
      toast.error(response.message);
    }
  }, [nodeConnection.slackNode, channels]);

  const onCreateLocalNodeTemplate= useCallback(() => {

  }, []);



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
