// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  // req: NextApiRequest,
  // res: NextApiResponse<Data>,
  req: any,
  res: any
) {
  const response = await fetch('http://localhost:1337/clinic');
  const data = await response.json();
  // console.log(data);
  
  
  res.status(200).json(data);
}
