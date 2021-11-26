import { useEffect, useState } from 'react'

import InstallIcon from '../../Icons/InstallIcon'

import { IconBtn } from './Style'

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      console.log('we are being triggered :D')
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = (evt) => {
    evt.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
  }
  if (!supportsPWA) {
    return null
  }
  return (
    <IconBtn
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      <InstallIcon color="#ffffff" />
    </IconBtn>
  )
}

export default InstallPWA
