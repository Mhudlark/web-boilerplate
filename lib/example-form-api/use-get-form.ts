import { ExampleFormSchema } from "@/app/form/example-form";
import { useQuery } from "@tanstack/react-query";

export const GET_EXAMPLE_FORM_DATA_QUERY_KEY = ["example-form"];

const examplePrefillData: Partial<ExampleFormSchema> = {
  username: "AdaLovelace",
  confirmUsername: "AdaLovelace",
};

// Fetch function
const fetchGetExampleFormData = async (): Promise<
  Partial<ExampleFormSchema>
> => {
  // Simulate an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(examplePrefillData);
    }, 800);
  });
};

// React Query hook
const useGetExampleFormData = () => {
  return useQuery({
    queryKey: GET_EXAMPLE_FORM_DATA_QUERY_KEY,
    queryFn: fetchGetExampleFormData,
  });
};

export default useGetExampleFormData;
