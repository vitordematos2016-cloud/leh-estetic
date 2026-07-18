export function buildGoogleMapsDirectionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}

export function buildWazeUrl(latitude: number, longitude: number): string {
  return `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`
}
