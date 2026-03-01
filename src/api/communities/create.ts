import { communityApi } from "../utils/communityApi";

interface CreateCommunityResponse {
  community: {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
    type: "parish" | "chapel";
    address: string;
    coverId: string;
  };
}

export const createCommunity = async (values: {
  name: string;
  type: string;
  address: string;
  coverId?: string;
}) => {
  const result = await communityApi<CreateCommunityResponse>("/", {
    method: "POST",
    body: JSON.stringify(values),
  });

  return result;
};
