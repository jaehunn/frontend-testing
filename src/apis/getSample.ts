import Http from ".";

type Params = {
  // ...
};

type Response = {
  data: {
    name: string;
  };
};

export const getSampleUrl = () => `/api/sample` as const;

export const getSample = (params?: Params) => {
  return Http.get<Response>(getSampleUrl(), params);
};
