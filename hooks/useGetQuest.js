import { useState, useEffect } from 'react'

import axios from 'axios'

import Quest from '../models/Quest.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

const useGetQuest = () => {
  const url = `${API_URL}Quests${API_FORMAT}`

  const [getQuestLoading, setLoading] = useState(true)
  const [getQuestError, setError] = useState(false)
  const [getQuest, setGetQuest] = useState([])

  let formatData = []

  useEffect(() => {
    setLoading(true)
    setError(false)

    let cansle

    axios({
      method: 'GET',
      url: `${url}`,
      cancelToken: new axios.CancelToken((c) => (cansle = c)),
    })
      .then((res) => {
        res.data.forEach((result) => {
          if (!result.name.toLowerCase().includes('[hc]'.toLowerCase()))
            if (!result.name.toLowerCase().includes('Clan Key'.toLowerCase()))
              formatData.push(new Quest(result))
        })

        setGetQuest(
          [...new Set(formatData)].reduce((unique, o) => {
            if (!unique.some((obj) => obj.name === o.name)) {
              unique.push(o)
            }
            return unique
          }, []),
        )
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cansle()
  }, [])

  return { getQuest, getQuestLoading, getQuestError }
}

export default useGetQuest
