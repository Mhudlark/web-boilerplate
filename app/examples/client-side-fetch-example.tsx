"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetPokemon from "@/lib/pokemon-api/use-get-pokemon";
import { AlertCircleIcon, Loader2Icon } from "lucide-react";
import Image from "next/image";

const ClientSideFetchExample = () => {
  const { data, isLoading, error } = useGetPokemon("pikachu");

  return (
    <Card className="h-min">
      <CardHeader>
        <CardTitle>GET Request (CSR)</CardTitle>
        <CardDescription>
          Client-side rendering using the Pokemon API.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {isLoading && (
          <div className="flex w-64 justify-center p-8">
            <Loader2Icon className="animate-spin" />
          </div>
        )}
        {!isLoading && error && (
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Error loading Pikachu data</AlertTitle>
            <AlertDescription>
              <p>{error?.message}</p>
            </AlertDescription>
          </Alert>
        )}

        {!isLoading && !error && data && (
          <>
            <p className="text-2xl font-bold">{data?.name}</p>

            {data?.sprites.front_default && (
              <Image
                src={data?.sprites.front_default}
                alt={data?.name ?? "Pokemon"}
                width={100}
                height={100}
                priority
                unoptimized
              />
            )}

            <div className="grid w-full grid-cols-1 gap-x-4 self-start text-xs sm:grid-cols-2">
              {[
                { label: "Height", value: data?.height },
                { label: "Weight", value: data?.weight },
                { label: "Base Experience", value: data?.base_experience },
                { label: "Order", value: data?.order },
                { label: "Is Default", value: data?.is_default ? "Yes" : "No" },
                { label: "Species", value: data?.species.name },
                {
                  label: "Types",
                  value: data?.types.map((type) => type.type.name).join(", "),
                },
              ].map(
                (item) =>
                  item.value !== undefined && (
                    <div key={item.label} className="flex gap-1">
                      <span className="font-semibold">{item.label}:</span>
                      <span>{item.value}</span>
                    </div>
                  ),
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ClientSideFetchExample;
