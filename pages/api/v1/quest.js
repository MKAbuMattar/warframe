import Quest from '../../../models/Quest.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

export default async function asynchandler(req, res, next) {
  try {
    const url = `${API_URL}Quests${API_FORMAT}`

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.name.toLowerCase().includes('[hc]'.toLowerCase()))
        if (!result.name.toLowerCase().includes('Clan Key'.toLowerCase()))
          formatData.push(new Quest(result))
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Quest'

    return res.status(200).send({
      status: 'ok',
      section,
      totalCount,
      data: uniq,
    })
  } catch (error) {
    return res.send({
      error,
    })
  }
}
