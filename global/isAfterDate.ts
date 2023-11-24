export function isAfterDate(limiteDate: Date): boolean {
    const currentDate = new Date()

    // If the current date is after the 1st of December at midnight, return true, otherwise return false
    return currentDate.getTime() > limiteDate.getTime()
}
