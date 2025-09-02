"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetPokemon from "@/lib/pokemon-api/use-get-pokemon";

const ApiGetRequestExample = () => {
  const { data } = useGetPokemon("pikachu");

  return (
    <Card className="h-min">
      <CardHeader>
        <CardTitle>API - GET Request</CardTitle>
        <CardDescription>
          An example of a GET request to the Pokemon API.
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-` flex flex-col items-center">
        <p className="text-2xl font-bold">{data?.name}</p>

        {data?.sprites.front_default && (
          <img
            src={data?.sprites.front_default}
            alt={data?.name}
            width={100}
            height={100}
          />
        )}

        <div className="grid w-full grid-cols-1 self-start text-xs sm:grid-cols-2">
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
      </CardContent>
    </Card>
  );
};

export default ApiGetRequestExample;
