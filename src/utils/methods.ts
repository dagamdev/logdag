import { MILLISECOND_TIMES } from './constants'

export function relativeTime (timestamp: string, lang: Intl.LocalesArgument = 'en') {
  const currentTime = new Date().getTime() // Tiempo actual en milisegundos
  const targetDate = new Date(timestamp).getTime() // Convertimos el string a número
  const msDifference = targetDate - currentTime // Diferencia en milisegundos
  const secondsDifference = Math.round(msDifference / 1000) // Diferencia en segundos

  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })

  // Determinamos la unidad de tiempo adecuada
  if (Math.abs(secondsDifference) < 60) {
    return rtf.format(secondsDifference, 'second')
  }

  const minutesDifference = Math.round(secondsDifference / 60)
  if (Math.abs(minutesDifference) < 60) {
    return rtf.format(minutesDifference, 'minute')
  }

  const hoursDifference = Math.round(minutesDifference / 60)
  if (Math.abs(hoursDifference) < 24) {
    return rtf.format(hoursDifference, 'hour')
  }

  const daysDifference = Math.round(hoursDifference / 24)
  if (Math.abs(daysDifference) < 30) {
    return rtf.format(daysDifference, 'day')
  }

  const monthsDifference = Math.round(daysDifference / 30)
  if (Math.abs(monthsDifference) < 12) {
    return rtf.format(monthsDifference, 'month')
  }

  const yearsDifference = Math.round(monthsDifference / 12)
  return rtf.format(yearsDifference, 'year')
}

export function getTimeDifference (firstDate: string, lastDate: string, lang: Intl.LocalesArgument = 'en') {
  let differenceTime = new Date(lastDate).getTime() - new Date(firstDate).getTime()
  const times: string[] = []

  for (const key in MILLISECOND_TIMES) {
    const milliseconds = MILLISECOND_TIMES[key as keyof typeof MILLISECOND_TIMES]
    const amount = Math.floor(differenceTime / milliseconds)

    if (amount === 0) continue
    differenceTime = Math.floor(differenceTime % milliseconds)

    times.push(amount + key[0].toLowerCase())
  }

  return `${times.join(' ')} defference`
}

export function isClient () {
  return typeof window === 'object'
}
