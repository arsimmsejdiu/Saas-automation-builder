import React from "react";
import Workflow from "./workflow";
import { onGetWorkflows } from "../_actions/workflow-connections";
import MoreCredits from "./more-credits";

type Props = {};

const Workflows =  (props: Props) => { //TODO: add async when using onGetWorkflows()
  const workflows = onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 m-2">
        <MoreCredits />
        {/* {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <EmptyWorkflow />
        )} */}
        <Workflow 
          description="Creating a test workflow"
          id="sdse33343434"
          name="Autimation Workflow"
          publish={false}
        />
        <Workflow 
          description="Creating a test workflow"
          id="sdse33343434"
          name="Autimation Workflow"
          publish={false}
        />
        <Workflow 
          description="Creating a test workflow"
          id="sdse33343434"
          name="Autimation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
