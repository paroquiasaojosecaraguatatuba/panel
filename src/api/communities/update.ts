import { communityApi } from "../utils/communityApi";

interface UpdateCommunityResponse {
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

export const updateCommunity = async ({ id, ...values }: {
  id: string;
  name: string;
  type: string;
  address: string;
  coverId?: string;
}) => {
  const result = await communityApi<UpdateCommunityResponse>(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(values),
  });

  return result;
};
