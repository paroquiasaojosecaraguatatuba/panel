"use client";

import { listCommunities } from "@/api/communities/list";
import { ChurchCard } from "@/components/ChurchCard";
import { useQuery } from "@tanstack/react-query";

export const CommunitiesList = () => {
  const { data } = useQuery({
    queryKey: ["communities"],
    queryFn: listCommunities,
    refetchOnWindowFocus: false,
  });

  const communities = data?.communities || [];

  return (
    <>
      {communities
        .sort((a, b) =>
          a.type === "parish_church" && b.type === "chapel" ? -1 : 1,
        )
        .map((community) => (
          <ChurchCard key={community.id} community={community} />
        ))}
    </>
  );
};
