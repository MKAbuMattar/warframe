import { useEffect, useState } from 'react'

import InstallIcon from '../../Icons/InstallIcon'

import { IconBtn } from './Style'

const useInstallPWA = (props) => {
  const { initSupportsPWA = false, initPromptInstall = null } = props

  const [supportsPWA, setSupportsPWA] = useState(initSupportsPWA)
  const [promptInstall, setPromptInstall] = useState(initPromptInstall)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setSupportsPWA(true)
      setPromptInstall(e)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = (e) => {
    e.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
  }

  if (!supportsPWA) {
    return null
  }

  return (
    <IconBtn aria-label="Install app" title="Install app" onClick={onClick}>
      <InstallIcon color="#ffffff" />
    </IconBtn>
  )
}

export default useInstallPWA
