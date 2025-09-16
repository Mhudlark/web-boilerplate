import ComponentsDisplay from "./components-page";

export default function ComponentsPage() {
  return (
    <div className="bg-background flex min-h-screen justify-center p-8">
      <div className="flex max-w-4xl flex-col gap-24">
        <h1 className="text-center text-4xl font-bold">UI Components</h1>
        <ComponentsDisplay />
      </div>
    </div>
  );
}
