"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  Volume2,
  Eye,
  Shield,
  ArrowLeft,
  Save,
  RotateCcw,
} from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    medicationReminders: true,
    hydrationReminders: true,
    appointmentReminders: true,
    restroomReminders: false,
    showerReminders: true,
    silentHoursEnabled: true,
    silentStart: "22:00",
    silentEnd: "07:00",
    voiceType: "female",
    speechSpeed: [1.0],
    voiceVolume: [75],
    confirmationSounds: true,
    largeText: false,
    highContrast: false,
    buttonSize: "normal",
    screenReader: false,
    shareWithFamily: true,
    shareWithDoctor: true,
    dataRetention: "1year",
    locationTracking: true,
  });

  const handleSave = () => console.log("Settings saved:", settings);
  const handleReset = () =>
    setSettings({
      medicationReminders: true,
      hydrationReminders: true,
      appointmentReminders: true,
      restroomReminders: false,
      showerReminders: true,
      silentHoursEnabled: true,
      silentStart: "22:00",
      silentEnd: "07:00",
      voiceType: "female",
      speechSpeed: [1.0],
      voiceVolume: [75],
      confirmationSounds: true,
      largeText: false,
      highContrast: false,
      buttonSize: "normal",
      screenReader: false,
      shareWithFamily: true,
      shareWithDoctor: true,
      dataRetention: "1year",
      locationTracking: true,
    });

  return (
    <div className="min-h-screen bg-white px-4 py-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/" className="self-start sm:self-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Image
                src="/images/betti-logo.png"
                alt="Betti Logo"
                width={48}
                height={48}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif text-secondary-blue">
                  App Settings
                </h1>
                <p className="text-sm sm:text-base text-alt-dark-gray">
                  Customize your preferences
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              onClick={handleSave}
              className="bg-primary-green hover:bg-primary-green/90 text-white w-full sm:w-auto"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Default
            </Button>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {/* Notification Preferences */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif text-lg sm:text-xl">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Switches */}
              {[
                ["Medication Reminders", "medicationReminders"],
                ["Hydration Reminders", "hydrationReminders"],
                ["Appointment Reminders", "appointmentReminders"],
                ["Restroom Reminders", "restroomReminders"],
                ["Shower Reminders", "showerReminders"],
              ].map(([label, key]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={key}>{label}</Label>
                  <Switch
                    id={key}
                    checked={settings[key as keyof typeof settings] as boolean}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, [key]: checked })
                    }
                    style={{
                      backgroundColor: (settings[
                        key as keyof typeof settings
                      ] as boolean)
                        ? "#5C7F39"
                        : "#e5e7eb",
                    }}
                  />
                </div>
              ))}

              {/* Silent Hours */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="silent-hours">Silent Hours</Label>
                  <Switch
                    id="silent-hours"
                    checked={settings.silentHoursEnabled}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, silentHoursEnabled: checked })
                    }
                    style={{
                      backgroundColor: settings.silentHoursEnabled
                        ? "#5C7F39"
                        : "#e5e7eb",
                    }}
                  />
                </div>
                {settings.silentHoursEnabled && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs">Start Time</Label>
                      <Select
                        value={settings.silentStart}
                        onValueChange={(value) =>
                          setSettings({ ...settings, silentStart: value })
                        }
                      >
                        <SelectTrigger className="h-8 w-full sm:w-auto border-primary-green">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-primary-green text-white">
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="21:00">9:00 PM</SelectItem>
                          <SelectItem value="22:00">10:00 PM</SelectItem>
                          <SelectItem value="23:00">11:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">End Time</Label>
                      <Select
                        value={settings.silentEnd}
                        onValueChange={(value) =>
                          setSettings({ ...settings, silentEnd: value })
                        }
                      >
                        <SelectTrigger className="h-8 w-full sm:w-auto border-primary-green">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-primary-green text-white">
                          <SelectItem value="06:00">6:00 AM</SelectItem>
                          <SelectItem value="07:00">7:00 AM</SelectItem>
                          <SelectItem value="08:00">8:00 AM</SelectItem>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Repeat same responsive patterns for other cards (Voice, Accessibility, Privacy)... */}
        </div>
      </div>
    </div>
  );
}
