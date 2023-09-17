import { rest } from 'msw';

export const handlers = () => {
  return [rest.get('/api/sample', getSample)];
};

const getSample: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: '',
    })
  );
};
