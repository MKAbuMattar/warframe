import { Fragment } from 'react'

import {
  BlastIcon,
  ColdIcon,
  CorrosiveIcon,
  ElectrcityIcon,
  GasIcon,
  HeatIcon,
  ImpactIcon,
  MagneticIcon,
  PunctureIcon,
  RadiationIcon,
  SlashIcon,
  ToxinIcon,
  ViralIcon,
} from '../../Icons/DamageIcon'

const DamageIcons = ({ damage }) => {
  return (
    <Fragment>
      {console.log(damage)}
      {damage.toLowerCase() === 'Blast'.toLowerCase() && (
        <BlastIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Cold'.toLowerCase() && (
        <ColdIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Corrosive'.toLowerCase() && (
        <CorrosiveIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Electricity'.toLowerCase() && (
        <ElectrcityIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Gas'.toLowerCase() && (
        <GasIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Heat'.toLowerCase() && (
        <HeatIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Impact'.toLowerCase() && (
        <ImpactIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Magnetic'.toLowerCase() && (
        <MagneticIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Puncture'.toLowerCase() && (
        <PunctureIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Radiation'.toLowerCase() && (
        <RadiationIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Slash'.toLowerCase() && (
        <SlashIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Toxin'.toLowerCase() && (
        <ToxinIcon color="#ffffff" size="15" />
      )}
      {damage.toLowerCase() === 'Viral'.toLowerCase() && (
        <ViralIcon color="#ffffff" size="15" />
      )}
    </Fragment>
  )
}

export default DamageIcons
