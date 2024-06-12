const kelvinToCelsius= (kelvin: number) => {
  return  (kelvin - 273).toFixed(2);
}

export default kelvinToCelsius

// aqui

// const formatPercent = (value: string) => {
//   const percent = (
//     parseFloat(value.replace(/[^0-9]/g, '')) * 0.1
//   ).toLocaleString('pt-BR')
//   return percent.toString()
// }

// export default formatPercent