"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"


export function HomeComponent() {

  const tabs = [
    {
      name: "Hospitals",
      href: "/hospitals",
      current: true,
    },
    {
      name: "Clinics",
      href: "/clinics",
      current: false,
    },
    {
      name: "Pharmacies",
      href: "/pharmacies",
      current: false,
    },
  ]

  const [pos, setPos] = useState(null) as any

  const getPostion = async (pos: any) => {
    setPos({
      lat: pos.coords.latitude,
      long: pos.coords.longitude
    })
    console.log(pos)
  }
  useEffect(() => {

    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) { console.log(result.state); })
      navigator.geolocation.getCurrentPosition(getPostion)
    } else {
      console.log("Geolocation is not available")
    }
  }, [])

  useEffect(() => {
    if (!pos) return
    console.log(pos)
  }, [pos])

  return (
    <section className="w-full h-screen py-12 md:py-24 flex items-center justify-center bg-black">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Find the nearest Hospital, Clinic, or Pharmacy
          </h1>
          <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
            We are here to help you find the nearest medical facilities in your area.
          </p>
        </div>
        <div className="w-full max-w-sm mt-10 space-y-2 mx-auto">

          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <Button
                key={tab.name}
                className={`px-4 py-2 text-sm font-medium rounded-md ${tab.current ? "bg-white text-black" : "text-white"} hover:bg-white hover:text-black`}
              >
                <Link href={{
                  pathname: tab.href,
                  query: {
                    lat: pos?.lat,
                    long: pos?.long
                  }
                }}>
                  {tab.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}
