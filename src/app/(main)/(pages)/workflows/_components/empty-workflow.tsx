"use client"

import { FuzzieLogo } from "@/assets";
import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import Image from "next/image";
import React from "react";

type Props = {};

const EmptyWorkflow = (props: Props) => {
  const { setOpen } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    );
  };
  // CHALLENGE: If the user tries to access this route you should send them to their first workflow they have or create one or you can have your own behavior.
  // All we need to do in this editor page is that if the user ever tried to access an editor page ex: "workflow/editor" -> but they do not have an ID ex: "workflow/editor/23232hdg4".
  // All that you going to do is look in the database for any workflow that they have and you're going to create a workflow for them and you are going to create that specific workflow,
  // and send them to that editor id.

  // 1. One solution to this is to send them back to the workflow route and thay can press the button that opens the drawer that allows them to create the workflow
  // 2. Second solution is to have send them in the workflow route and at the same time have the workkflow drawer opened.
  // 3. Third solution is create a workflow for them and send them to the editorID directly

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={FuzzieLogo} height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first workflow!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a workflow and automate your work
      </p>
      <div className="mt-6">
        <Hint label="Create workflow" side="bottom">
         <Button disabled={false} onClick={handleClick} size="lg">
          Create workflow
        </Button> 
        </Hint>
      </div>
    </div>
  )
};

export default EmptyWorkflow;
