"use client";

import { ButtonLoading } from "@/components/features/form/button-loading";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const skillsOptions = [
  {
    id: "javascript",
    label: "JavaScript",
  },
  {
    id: "typescript",
    label: "TypeScript",
  },
  {
    id: "react",
    label: "React",
  },
  {
    id: "nextjs",
    label: "Next.js",
  },
  {
    id: "nodejs",
    label: "Node.js",
  },
  {
    id: "python",
    label: "Python",
  },
];

const formSchema = z
  .object({
    // Text Input
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(20, {
        message: "Username must not be longer than 20 characters.",
      }),

    // Confirm Username
    confirmUsername: z
      .string()
      .min(1, { message: "Confirm username is required." }),

    // Select Dropdown
    country: z.string().min(1, {
      message: "Please select a country.",
    }),

    // Boolean Switch for marketing
    marketing: z.boolean(),

    // Textarea
    bio: z
      .string()
      .min(10, {
        message: "Bio must be at least 10 characters.",
      })
      .max(500, {
        message: "Bio must not be longer than 500 characters.",
      }),

    // Another Checkbox Array
    skills: z
      .array(z.string())
      .min(1, {
        message: "Please select at least one skill.",
      })
      .max(4, {
        message: "Please select no more than 4 skills.",
      }),

    // Radio Group
    experience: z.enum(["junior", "mid", "senior", "lead"]).optional(),

    // Terms and Conditions Checkbox
    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.username === data.confirmUsername, {
    message: "Usernames don't match",
    path: ["confirmUsername"],
  });

const defaultValues: ExampleFormSchema = {
  username: "",
  confirmUsername: "",
  country: "",
  marketing: false,
  bio: "",
  skills: [],
  experience: undefined,
  terms: false,
};

const examplePrefillData: Partial<ExampleFormSchema> = {
  username: "AdaLovelace",
  confirmUsername: "AdaLovelace",
};

export type ExampleFormSchema = z.infer<typeof formSchema>;

export default function ExampleForm() {
  const queryClient = useQueryClient();

  // Query for pre-filling the form with data from an API
  const { data: prefillData } = useQuery({
    queryKey: ["example-prefill"],
    queryFn: (): Promise<Partial<ExampleFormSchema>> => {
      // Wait 2 seconds and return example prefill data
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(examplePrefillData);
        }, 2000);
      });
    },
  });

  // Mutation for form submission
  const { mutate: submitForm, isPending } = useMutation({
    mutationFn: (values: ExampleFormSchema) => {
      console.log("Form submitted with values:", values);
      // Here you could make an API call to submit the form
      return Promise.resolve(values);
    },
    onSuccess: () => {
      // revalidate query
      return queryClient.invalidateQueries({ queryKey: ["example-prefill"] });
    },
  });

  const form = useForm<ExampleFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(
    function setPrefillData() {
      if (prefillData) {
        form.reset({ ...defaultValues, ...prefillData });
      }
    },
    [prefillData, form],
  );

  function onSubmit(values: ExampleFormSchema) {
    // Submit the form using the mutation
    submitForm(values, {
      onSuccess: () => {
        toast.success("Form submitted successfully!");
      },
      onError: (error) => {
        toast.error("Form submission failed. Please try again.");
        console.error("Form submission failed:", error);
      },
    });
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Example form</h2>
        <p className="text-muted-foreground">Example form description.</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 space-y-6"
        >
          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormDescription>
                  Your unique username (2-20 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Username */}
          <FormField
            control={form.control}
            name="confirmUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Username *</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm your username" {...field} />
                </FormControl>
                <FormDescription>
                  Re-enter your username to confirm.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country Select */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select your country of residence.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Bio Textarea */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Write a brief description about yourself (10-500 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Skills Checkbox Group */}
          <FormField
            control={form.control}
            name="skills"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    Technical Skills *
                  </FormLabel>
                  <FormDescription>
                    Select your technical skills (1-4 selections).
                  </FormDescription>
                </div>
                {skillsOptions.map((skill) => (
                  <FormField
                    key={skill.id}
                    control={form.control}
                    name="skills"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={skill.id}
                          className="flex flex-row items-center gap-2"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(skill.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      skill.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: string) => value !== skill.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {skill.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Experience Level Radio Group */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Experience Level (Optional field)</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col"
                  >
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="junior" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Junior (0-2 years)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="mid" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Mid-level (2-5 years)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="senior" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Senior (5+ years)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="lead" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Team Lead / Manager
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms and Conditions */}
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Accept terms and conditions *</FormLabel>
                  <FormDescription>
                    You agree to our{" "}
                    <Link href="/terms" className="underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Marketing Switch */}
          <FormField
            control={form.control}
            name="marketing"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Marketing Emails</FormLabel>
                  <FormDescription>
                    Receive emails about new features and promotions.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <ButtonLoading type="submit" className="w-full" isLoading={isPending}>
            Create Account
          </ButtonLoading>
        </form>
      </Form>
    </div>
  );
}
