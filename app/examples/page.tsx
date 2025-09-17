import ApiGetRequestExample from "./api-get-request-example";

export default function ExamplesPage() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold">Examples</h2>

      <div className="grid min-h-screen w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <ApiGetRequestExample />
      </div>
    </div>
  );
}
