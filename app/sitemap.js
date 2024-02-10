import projects from "../const/projects.js";
import nav from "../const/nav.js";
import get from "lodash/get";

const Page = () => {
  return [
    {
      url: "https://www.technica.dev",
      lastModified: "2024-02-10",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `https://www.technica.dev${get(nav, "profile.href")}`,
      lastModified: "2024-02-10",
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `https://www.technica.dev${get(nav, "projects.href")}`,
      lastModified: "2024-02-10",
      changeFrequency: "yearly",
      priority: 0.9,
    },
    ...projects.map((project) => {
      return {
        url: `https://www.technica.dev${get(nav, "project.href")}?id=${get(
          project,
          "id"
        )}`,
        lastModified: get(project, "date"),
        changeFrequency: "yearly",
        priority: 0.8,
      };
    }),
    {
      url: `https://www.technica.dev${get(nav, "contact.href")}`,
      lastModified: "2024-02-10",
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
};

export default Page;
