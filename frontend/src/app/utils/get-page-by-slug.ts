import { fetchAPI } from "@/app/utils/fetch-api";

enum pageSlugToId {
  "home" = 1,
  "about" = 2,
  "team" = 3,
  "faqs" = 4,
  "inquiries" = 6,
  "form-success" = 7,
  "themes" = 8,
}

export async function getPageBySlug(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  let path: string = "";
  switch (slug) {
    case "home":
      path = `/pages/${pageSlugToId.home}`;
      break;
    case "team":
      path = `/pages/${pageSlugToId.team}`;
      break;
    case "faqs":
      path = `/pages/${pageSlugToId.faqs}`;
      break;
    case "inquiries":
      path = `/pages/${pageSlugToId.inquiries}`;
      break;
    case "form-success":
      path = `/pages/${pageSlugToId["form-success"]}`;
      break;
    case "themes":
      path = `/pages/${pageSlugToId.themes}`;
      break;
    default:
      null;
  }
  const urlParamsObject = {
    populate: "deep,5",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
