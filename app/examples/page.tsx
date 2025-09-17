import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";
import ClientSideFetchExample from "./client-side-fetch-example";
import ServerSideFetchExample from "./server-side-fetch-example";

export default function ExamplesPage() {
  return (
    <div className="bg-background flex min-h-screen justify-center p-8">
      <div className="flex max-w-4xl flex-col gap-24">
        <h1 className="text-center text-4xl font-bold">Examples</h1>
        <div className="grid min-h-screen w-full grid-cols-2 gap-4">
          <ClientSideFetchExample />
          <Suspense
            fallback={
              <div className="flex w-64 justify-center p-16">
                <Loader2Icon className="animate-spin" />
              </div>
            }
          >
            <ServerSideFetchExample />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
