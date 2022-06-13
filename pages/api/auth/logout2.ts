import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      res.setHeader('Set-Cookie', `access_token=; path=/; expires=${new Date(0).toUTCString()}; httponly`);
      res.statusCode = 204;
      return res.end();
    }
  } catch (e) {
    console.log(e);
    return res.send(e);
  }

  res.statusCode = 405;
  return res.end();
};
