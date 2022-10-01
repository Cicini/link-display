// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { env } from 'process'
import { XMLParser } from 'fast-xml-parser'

export type LinkData = {
  shortUrl: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<LinkData>) => {
  if (!env.URL) {
    res.status(500).write('url not set')
    return
  }

  const r = await fetch(env.URL)
  const text = await r.text()

  const parser = new XMLParser()
  const parsed = parser.parse(text)

  if (!parsed) {
    res.status(500).write('parsing failed')
    return
  }

  res.status(200).json({ shortUrl: parsed.root.shorturl })
}
export default handler
