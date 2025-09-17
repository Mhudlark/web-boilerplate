import ApiGetRequestExample from "./api-get-request-example";

export default function ExamplesPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-light">Examples</h2>

      <div className="grid min-h-screen w-full grid-cols-2 gap-4">
        <ApiGetRequestExample />
      </div>
    </div>
  );
}
