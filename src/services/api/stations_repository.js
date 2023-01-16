
//function to get the data
const getStationsData = async function () {
  const response = await fetch("http://api.citybik.es/v2/networks/citi-bike-nyc", {
    method: "GET",

  })
  if (response.status == 200) {

    let data = await response.json();
    
    return returnStations(data, 0, 308, 0);

  } else {
    new Error(response.statusText)
  }
}
export default getStationsData


// function to return a certain number of the data 
//i tried to make a "show more" button to display more stations but it didn't work
function returnStations(data, inf, sup, plusSup) {
  
  data = data.network.stations;
  //console.log(data)
  const slicedArray = data.slice(inf, sup + plusSup);

  return slicedArray;
}


