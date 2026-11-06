import { ArrowDown, ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { syncFlow } from "@/content/pages/ecosystem";

export function SyncFlow() {
  return (
    <ol className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
      {syncFlow.nodes.map((node, index) => (
        <Fragment key={node.label}>
          <li className="flex-1 rounded-2xl border border-border bg-card p-6 text-center">
            <p className="text-xs font-semibold tracking-wide text-purple uppercase">{node.label}</p>
            <p className="mt-2 text-h4 font-semibold">{node.title}</p>
            <p className="mt-2 text-small text-muted">{node.body}</p>
          </li>
          {index < syncFlow.links.length && (
            <li aria-hidden="true" className="flex flex-col items-center gap-1 px-2 text-xs text-subtle lg:w-32">
              <ArrowDown className="size-5 text-lime lg:hidden" />
              <ArrowRight className="hidden size-5 text-lime lg:block" />
              {syncFlow.links[index]}
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
