import { HttpResponse, http } from "msw";

import { getSample } from "~/apis/getSample";

export const handlers = [
  http.get("/api/sample", () => {
    const data: Awaited<ReturnType<typeof getSample>>["data"] = {
      name: "Jaehun",
    };

    return HttpResponse.json({
      data,
    });
  }),
];
