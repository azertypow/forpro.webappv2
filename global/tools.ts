export const map = (
  value: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => (value - x1) * (y2 - x2) / (y1 - x1) + x2



export function getDateBy_FR_stringFormat(date: string) {

  const eventDate = new Date(date)

  const stringDay = [
    'dmanche',
    'lund',
    'mard',
    'mercred',
    'jeud',
    'vendred',
    'samed',
  ][eventDate.getDay()]


  const stringMounth = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ][eventDate.getMonth()]


  return `${stringDay} ${eventDate.getDay()} ${stringMounth} ${eventDate.getFullYear()}`
}
