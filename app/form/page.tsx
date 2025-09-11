"use client";

import ExampleFormDemo from "./example-form-demo";

export default function FormPage() {
  return (
    <main className="bg-background flex min-h-screen justify-center p-8">
      <div className="flex max-w-4xl flex-col gap-24">
        <h1 className="text-4xl font-bold">Forms</h1>
        <ExampleFormDemo />
      </div>
    </main>
  );
}
