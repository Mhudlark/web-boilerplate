"use client";

import useGetExampleFormData from "@/lib/example-form-api/use-get-form";
import useMutateExampleFormData from "@/lib/example-form-api/use-mutate-form";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import ExampleForm, { ExampleFormSchema } from "./example-form";

export default function ExampleFormPage() {
  // Query for pre-filling the form with data from an API
  const { data: prefillData, isLoading } = useGetExampleFormData();

  // Mutation for form submission
  const exampleFormMutation = useMutateExampleFormData();

  function onSubmit(values: ExampleFormSchema) {
    // Submit the form using the mutation
    exampleFormMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Form submitted successfully!");
      },
      onError: (error) => {
        toast.error("Form submission failed. Please try again.");
        console.error("Form submission failed:", error);
      },
    });
  }

  if (isLoading) {
    return (
      <div className="flex h-32 w-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <ExampleForm
      values={prefillData}
      handleSubmit={onSubmit}
      isSubmitting={exampleFormMutation.isPending}
    />
  );
}
