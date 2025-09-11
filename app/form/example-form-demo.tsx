"use client";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useMemo, useState } from "react";
import ExampleForm, { ExampleFormSchema } from "./example-form";

const examplePrefillData: Partial<ExampleFormSchema> = {
  username: "AdaLovelace",
  confirmUsername: "AdaLovelace",
};

export default function ExampleFormDemo() {
  const [isPrefilling, setIsPrefilling] = useState(false);

  const prefillData: Partial<ExampleFormSchema> = useMemo(
    () => (isPrefilling ? examplePrefillData : {}),
    [isPrefilling],
  );

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-12">
      <div className="flex items-center justify-between gap-4 rounded-lg border p-3 shadow-sm">
        <Label htmlFor="is-prefilling">Prefill form</Label>
        <Switch
          id="is-prefilling"
          checked={isPrefilling}
          onCheckedChange={setIsPrefilling}
        />
      </div>
      <Separator />
      <ExampleForm prefillData={prefillData} />
    </div>
  );
}
