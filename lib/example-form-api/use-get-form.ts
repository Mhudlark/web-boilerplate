import { ExampleFormSchema } from "@/app/form/example-form";
import { useQuery } from "@tanstack/react-query";

export const GET_EXAMPLE_FORM_DATA_QUERY_KEY = ["example-form"];

const examplePrefillData: Partial<ExampleFormSchema> = {
  username: "AdaLovelace",
  confirmUsername: "AdaLovelace",
};

// React Query hook
const useGetExampleFormData = () => {
  return useQuery({
    queryKey: GET_EXAMPLE_FORM_DATA_QUERY_KEY,
    queryFn: (): Promise<Partial<ExampleFormSchema>> => {
      // Wait 2 seconds and return example prefill data
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(examplePrefillData);
        }, 2000);
      });
    },
  });
};

export default useGetExampleFormData;
