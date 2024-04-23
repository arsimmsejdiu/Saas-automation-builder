"use client"

import { FuzzieLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import EmptyWorkflow from "../_components/empty-workflow";

type Props = {};

const Page = (props: Props) => {
  // CHALLENGE: If the user tries to access this route you should send them to their first workflow they have or create one or you can have your own behavior.
  // All we need to do in this editor page is that if the user ever tried to access an editor page ex: "workflow/editor" -> but they do not have an ID ex: "workflow/editor/23232hdg4".
  // All that you going to do is look in the database for any workflow that they have and you're going to create a workflow for them and you are going to create that specific workflow,
  // and send them to that editor id.

  // 1. One solution to this is to send them back to the workflow route and thay can press the button that opens the drawer that allows them to create the workflow
  // 2. Second solution is to have send them in the workflow route and at the same time have the workkflow drawer opened.
  // 3. Third solution is create a workflow for them and send them to the editorID directly

  return (
    <EmptyWorkflow />
  )
};

export default Page;
