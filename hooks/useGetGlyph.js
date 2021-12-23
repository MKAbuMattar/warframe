import { useState, useEffect } from 'react'

import axios from 'axios'

import Glyph from '../models/Glyph.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

const useGetGlyph = () => {
  const url = `${API_URL}Glyphs${API_FORMAT}`

  const [getGlyphLoading, setLoading] = useState(true)
  const [getGlyphError, setError] = useState(false)
  const [getGlyph, setGetGlyph] = useState([])

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
            if (!result.name.toLowerCase().includes('[Ph]'.toLowerCase()))
              formatData.push(new Glyph(result))
        })

        setGetGlyph(
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

  return { getGlyph, getGlyphLoading, getGlyphError }
}

export default useGetGlyph
