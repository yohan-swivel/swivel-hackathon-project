import { fetchAPI } from "@/app/utils/fetch-api";

export async function getPageBySlug() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const urlParamsObject = {
    populate: "deep,5",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI("/pages/3", urlParamsObject, options);
}
