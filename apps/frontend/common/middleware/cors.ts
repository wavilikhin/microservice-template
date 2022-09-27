import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'DELETE', 'PATCH'],
})

export const withCors = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}