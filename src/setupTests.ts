import "@testing-library/jest-dom/vitest";

import { server } from "~/mocks/node";

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "bypass",
  })
);

afterEach(() => {
  server.resetHandlers();

  vi.clearAllMocks();
});

afterAll(() => {
  server.close();
  vi.resetAllMocks();
});
