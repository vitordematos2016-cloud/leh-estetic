export function buildGoogleMapsDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

export function buildStreetViewUrl(
  latitude: number,
  longitude: number,
  heading: number,
  pitch: number,
  fov: number,
): string {
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}&heading=${heading}&pitch=${pitch}&fov=${fov}`
}

export function buildWazeUrl(latitude: number, longitude: number): string {
  return `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`
}
