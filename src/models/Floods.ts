import { Pagination } from "@mui/material"

export interface FloodsParams { 
  "features": Features[]
  "pagination": Pagination
}
export type Features = {
  "type": string,
  "bbox": number[],
  "geometry": Geometry,
  "properties": Properties

}

type Geometry = {
  "type": string,
  "coordinates": number[],
}

type Properties = {
  "alertlevel": string,
  "alertscore": number,
  "episodealertlevel": string,
  "episodealertscore": number,
  "istemporary": string,
  "iscurrent": string,
  "country": string,
  "fromdate": string,
  "todate": string,
  "datemodified": string,
  "iso3": string,
  "source": string,
  "sourceid": string,
  "polygonlabel": string,
  "Class": string,
  "affectedcountries": AffectedCountries,
  "Severitydata":Severitydata,
  "eventtype": string,
  "eventid": number,
  "episodeid":number,
  "eventname": string,
  "glide": string,
  "name": string,
  "description": string,
  'htmldescription': string,
  "icon":string,
  "iconoverall": string,
  "url" : Url,
  "severitydata": Severitydata
}

type Url = {
  geometry: string,
  report: string,
  details: string
}

type AffectedCountries = {
  "iso3": string,
  "countryname": string
}
type Severitydata = {
  "severity": number,
  "severitytext": string,
  "severityunit": string
}
