"use client"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { useEffect, useState } from "react"

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: -24.847706944682784, // Latitude da UTFPR Santa Helena
  lng: -54.34391796279542,  // Longitude da UTFPR Santa Helena
}

export default function Map() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Garante que o componente seja renderizado apenas no cliente
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Evita renderizar no servidor
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    console.error("A chave da API do Google Maps não foi fornecida.")
    return <p>Erro ao carregar o mapa. Verifique a chave da API.</p>
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}