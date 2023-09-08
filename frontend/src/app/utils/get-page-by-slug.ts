import { fetchAPI } from "@/app/utils/fetch-api";

export async function getPageBySlug(pageId: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const urlParamsObject = {
    populate: "deep,5",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(`/pages/${pageId}`, urlParamsObject, options);
}
