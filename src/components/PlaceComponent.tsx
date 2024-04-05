"use client"

import { createRef, useEffect, useRef, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useParams } from "next/navigation";

const apikey = process.env.HERE_API_KEY || '0KJLV_ckjEY5FGLTDpIidDNBCZcMLWHESkB-6b8j7Zc'

const PlaceComponent = () => {

    const params = useParams().place

    const [pos, setPos] = useState(null) as any
    const position = [51.505, -0.09]

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' }).then(function (result) { console.log(result.state); })
            navigator.geolocation.getCurrentPosition((e) => {

                console.log(e)
                setPos({
                    lat: e.coords.latitude,
                    long: e.coords.longitude
                })

            })
        } else {
            console.log("Geolocation is not available")
        }

    }, [])

    return (
        <div
            className="w-full h-screen py-12 md:py-24 flex items-center justify-center bg-black"
        >
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>,
        </div>
    )
}

export default PlaceComponent