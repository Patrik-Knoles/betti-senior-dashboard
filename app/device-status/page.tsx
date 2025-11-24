"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Menu, X, Lock, Zap, Smartphone, AlertTriangle, Home } from 'lucide-react'

export default function DeviceStatusPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [deviceStatuses, setDeviceStatuses] = useState({
    smartlock: { locked: true, lastAction: "Locked 2 hours ago" },
    backDoor: { locked: true, lastAction: "Locked 5 hours ago" },
    livingRoom: { locked: true, lastAction: "Locked 3 hours ago" },
    bedroom1: { locked: true, lastAction: "Locked 8 hours ago" },
    stoveAutoShutoff: { active: true },
    ovenAutoShutoff: { active: false },
    fallDetection: { active: true },
    motionSensor: { active: true },
    medicationDispenser: { active: true },
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDoorToggle = (doorKey) => {
    setDeviceStatuses({
      ...deviceStatuses,
      [doorKey]: {
        ...deviceStatuses[doorKey],
        locked: !deviceStatuses[doorKey].locked,
        lastAction: `${!deviceStatuses[doorKey].locked ? "Locked" : "Unlocked"} just now`,
      },
    })
  }

  const handleApplianceToggle = (applianceKey) => {
    setDeviceStatuses({
      ...deviceStatuses,
      [applianceKey]: {
        ...deviceStatuses[applianceKey],
        active: !deviceStatuses[applianceKey].active,
      },
    })
  }

  const devices = [
    {
      id: 1,
      name: "Smartwatch",
      category: "Wearables",
      battery: 82,
      status: "Active",
      lastToggle: "Still Wearing",
    },
    {
      id: 2,
      name: "Fitness Band",
      category: "Wearables",
      battery: 65,
      status: "Active",
      lastToggle: "Last turned on 3 days ago",
    },
    {
      id: 3,
      name: "Front Door Lock",
      category: "Smart Locks",
      battery: 78,
      status: deviceStatuses.smartlock.locked ? "Locked" : "Unlocked",
      lastToggle: deviceStatuses.smartlock.lastAction,
      controllable: true,
      doorKey: "smartlock",
    },
    {
      id: 4,
      name: "Back Door Lock",
      category: "Smart Locks",
      battery: 72,
      status: deviceStatuses.backDoor.locked ? "Locked" : "Unlocked",
      lastToggle: deviceStatuses.backDoor.lastAction,
      controllable: true,
      doorKey: "backDoor",
    },
    {
      id: 10,
      name: "Living Room Door Lock",
      category: "Smart Locks",
      battery: 74,
      status: deviceStatuses.livingRoom.locked ? "Locked" : "Unlocked",
      lastToggle: deviceStatuses.livingRoom.lastAction,
      controllable: true,
      doorKey: "livingRoom",
    },
    {
      id: 11,
      name: "Bedroom 1 Door Lock",
      category: "Smart Locks",
      battery: 70,
      status: deviceStatuses.bedroom1.locked ? "Locked" : "Unlocked",
      lastToggle: deviceStatuses.bedroom1.lastAction,
      controllable: true,
      doorKey: "bedroom1",
    },
    {
      id: 5,
      name: "Stove Auto-Shutoff",
      category: "Appliance Safety",
      battery: 88,
      status: deviceStatuses.stoveAutoShutoff.active ? "Active" : "Off",
      lastToggle: "Auto-shutoff in 30 min",
      controllable: true,
      applianceKey: "stoveAutoShutoff",
    },
    {
      id: 6,
      name: "Oven Auto-Shutoff",
      category: "Appliance Safety",
      battery: 85,
      status: deviceStatuses.ovenAutoShutoff.active ? "Active" : "Off",
      lastToggle: "Last used yesterday",
      controllable: true,
      applianceKey: "ovenAutoShutoff",
    },
    {
      id: 7,
      name: "Fall Detection Sensor",
      category: "Safety Sensors",
      battery: 91,
      status: deviceStatuses.fallDetection.active ? "Active" : "Off",
      lastToggle: "Always monitoring",
      controllable: true,
      applianceKey: "fallDetection",
    },
    {
      id: 8,
      name: "Motion Sensor",
      category: "Safety Sensors",
      battery: 76,
      status: deviceStatuses.motionSensor.active ? "Active" : "Off",
      lastToggle: "Motion detected 2 min ago",
      controllable: true,
      applianceKey: "motionSensor",
    },
    {
      id: 9,
      name: "Medication Dispenser",
      category: "Health Devices",
      battery: 60,
      status: deviceStatuses.medicationDispenser.active ? "Active" : "Off",
      lastToggle: "Next dose in 4 hours",
      controllable: true,
      applianceKey: "medicationDispenser",
    },
  ]

  const categories = Array.from(new Set(devices.map((d) => d.category)))

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <Image src="/images/betti-logo.png" alt="Betti Logo" width={50} height={50} className="rounded-full" />
            <div>
              <h1 className="text-3xl font-serif text-secondary-blue">Device Status</h1>
              <p className="text-lg text-alt-dark-gray">Smart home devices monitoring</p>
            </div>
          </div>

          <Button
            onClick={toggleMenu}
            variant="outline"
            size="lg"
            className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50" onClick={toggleMenu}>
            <div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-secondary-blue">Menu</h2>
                <Button onClick={toggleMenu} variant="ghost" size="sm">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <Link href="/profile" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <span className="font-medium">Profile</span>
                  </Button>
                </Link>
                <Link href="/settings" className="block">
                  <Button variant="outline" className="w-full justify-start text-left p-4 h-auto bg-transparent">
                    <span className="font-medium">Settings</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Devices by Category */}
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-serif text-primary-green">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {devices
                .filter((d) => d.category === category)
                .map((device) => (
                  <Card key={device.id} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-primary-green font-serif">
                        <span className="text-lg">{device.name}</span>
                        <Badge
                          className={`${
                            device.battery > 70
                              ? "bg-primary-green"
                              : device.battery > 40
                                ? "bg-secondary-blue"
                                : "bg-red-500"
                          } text-white`}
                        >
                          {device.battery}%
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-alt-dark-gray">Status</span>
                        <Badge className="bg-primary-green text-white">{device.status}</Badge>
                      </div>
                      <div className="text-sm">
                        <span className="text-alt-dark-gray">Last Action:</span>
                        <div className="text-alt-dark-gray mt-1">{device.lastToggle}</div>
                      </div>
                      {device.doorKey && (
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleDoorToggle(device.doorKey)}
                            className={`flex-1 ${
                              deviceStatuses[device.doorKey].locked
                                ? "bg-secondary-blue hover:bg-secondary-blue/90"
                                : "bg-red-500 hover:bg-red-600"
                            } text-white`}
                          >
                            <Lock className="h-4 w-4 mr-2" />
                            {deviceStatuses[device.doorKey].locked ? "Unlock" : "Lock"}
                          </Button>
                        </div>
                      )}
                      {device.applianceKey && (
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleApplianceToggle(device.applianceKey)}
                            className={`flex-1 ${
                              deviceStatuses[device.applianceKey].active
                                ? "bg-primary-green hover:bg-primary-green/90"
                                : "bg-alt-dark-gray hover:bg-alt-dark-gray/90"
                            } text-white`}
                          >
                            <Zap className="h-4 w-4 mr-2" />
                            {deviceStatuses[device.applianceKey].active ? "Turn Off" : "Turn On"}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <Card className="bg-secondary-blue text-white shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-2">All Systems Operational</h3>
              <p className="text-lg">Your smart home devices are functioning properly. All safety features are active and monitoring your home.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
