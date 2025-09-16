import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchGetPokemon } from "@/lib/pokemon-api/use-get-pokemon";
import Image from "next/image";

export default async function ServerSideFetchExample() {
  const data = await fetchGetPokemon("pikachu");

  return (
    <Card className="h-min">
      <CardHeader>
        <CardTitle>GET Request (SSR)</CardTitle>
        <CardDescription>
          Server-side rendering using the Pokemon API.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
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
      </CardContent>
    </Card>
  );
}
