import { ExampleFormSchema } from "@/app/form/example-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_EXAMPLE_FORM_DATA_QUERY_KEY } from "./use-get-form";

// Fetch function
const fetchMutateExampleFormData = (values: ExampleFormSchema) => {
  console.log("Form submitted with values:", values);
  // Here you could make an API call to submit the form
  return Promise.resolve(values);
};

// React Query hook
const useMutateExampleFormData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchMutateExampleFormData,
    onSuccess: () => {
      // revalidate GET query before completing the mutation
      return queryClient.invalidateQueries({
        queryKey: GET_EXAMPLE_FORM_DATA_QUERY_KEY,
      });
    },
  });
};

export default useMutateExampleFormData;
