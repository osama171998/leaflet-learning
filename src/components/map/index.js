import {useState} from "react"
import {MapContainer,TileLayer,Marker,Tooltip} from "react-leaflet"


const Map =  () =>{
    const mapTilerKey = "KM6Vos42AC6FhO7CGdw8"
    const [maps,setMap] = useState(`https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${mapTilerKey}`)
  
    const availableMaps = {
      "Basic":`https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${mapTilerKey}`,
      "Bright":`https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=${mapTilerKey}`,
      "Ocean":`https://api.maptiler.com/maps/ocean/{z}/{x}/{y}.png?key=${mapTilerKey}`
    }

    return <>
            <MapContainer center={[30.3753, 69.3451]} zoom={5}scrollWheelZoom={true} >
          <TileLayer
          url={maps}
          />
          <Marker
            key={1}
            position={[30.3753, 69.3451]}
            title="Pakistan"
          />
          <Tooltip direction='right' offset={[0, 0]} opacity={1} permanent>Pakistan</Tooltip>
        </MapContainer>
        <div className='vertical-panel'>
              {
                Object.keys(availableMaps).map((mapName,key)=>{
                  return <p key={key} onClick={()=>setMap(availableMaps[mapName])}>
                      {mapName}
                  </p>
                })
              }
        </div>
    </>  
}
export default Map