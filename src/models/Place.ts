export type PlaceProps = { 
  features: Features[]
}
type Features = {
  center: number[]
  place_name: string
  text: string
}
