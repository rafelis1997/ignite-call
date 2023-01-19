import { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const updateProfileBodySchema = z.object({
  bio: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT' && req.method !== 'GET') {
    return res.status(405).end()
  }

  if (req.method === 'PUT') {
    const session = await unstable_getServerSession(
      req,
      res,
      buildNextAuthOptions(req, res),
    )

    if (!session) {
      return res.status(401).end()
    }

    const { bio } = updateProfileBodySchema.parse(req.body)

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        bio,
      },
    })

    return res.status(204).end()
  }

  if (req.method === 'GET') {
    const session = await unstable_getServerSession(
      req,
      res,
      buildNextAuthOptions(req, res),
    )

    if (!session) {
      return res.status(401).end()
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    })

    return res.status(200).json({ user })
  }
}
