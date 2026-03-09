import { communityApi } from "../utils/communityApi";

interface GetCommunityBySlugResponse {
  community: {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
    type: "parish_church" | "chapel";
    address: string;
    coverId: string;
    coverUrl: string;
  }
}

export const getCommunityBySlug = async (slug: string) => {
  const result = await communityApi<GetCommunityBySlugResponse>(`/${slug}`);

  return result;
};
