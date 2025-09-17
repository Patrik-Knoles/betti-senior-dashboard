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
import {
  Bell,
  Volume2,
  Eye,
  Shield,
  ArrowLeft,
  Save,
  RotateCcw,
  Heart,
} from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Notification Preferences
    medicationReminders: true,
    hydrationReminders: true,
    appointmentReminders: true,
    restroomReminders: false,
    showerReminders: true,
    silentHoursEnabled: true,
    silentStart: "22:00",
    silentEnd: "07:00",

    // Voice & Interaction
    voiceType: "female",
    speechSpeed: [1.0],
    voiceVolume: [75],
    confirmationSounds: true,

    // Accessibility Features
    largeText: false,
    highContrast: false,
    buttonSize: "normal",
    screenReader: false,

    // Privacy & Sharing
    shareWithFamily: true,
    shareWithDoctor: true,
    dataRetention: "1year",
    locationTracking: true,
  });

  const handleSave = () => {
    console.log("Settings saved:", settings);
    // Here you would typically save to a database
  };

  const handleReset = () => {
    // Reset to default settings
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
  };

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4 lg:p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="self-start sm:self-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              <span className="text-xs sm:text-sm">Back to Dashboard</span>
            </Button>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-green-600" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif text-blue-800">
                  App Settings
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  Customize your preferences
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base order-2 sm:order-1"
            >
              <Save className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Save Settings
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="text-sm sm:text-base order-1 sm:order-2"
            >
              <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Reset to Default
            </Button>
          </div>
        </div>

        {/* Settings Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Notification Preferences Card */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {/* Notification Toggles */}
              {[
                {
                  id: "medication-reminders",
                  key: "medicationReminders",
                  label: "Medication Reminders",
                },
                {
                  id: "hydration-reminders",
                  key: "hydrationReminders",
                  label: "Hydration Reminders",
                },
                {
                  id: "appointment-reminders",
                  key: "appointmentReminders",
                  label: "Appointment Reminders",
                },
                {
                  id: "restroom-reminders",
                  key: "restroomReminders",
                  label: "Restroom Reminders",
                },
                {
                  id: "shower-reminders",
                  key: "showerReminders",
                  label: "Shower Reminders",
                },
              ].map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between"
                >
                  <Label
                    htmlFor={setting.id}
                    className="text-sm sm:text-base text-gray-700"
                  >
                    {setting.label}
                  </Label>
                  <Switch
                    id={setting.id}
                    checked={
                      settings[setting.key as keyof typeof settings] as boolean
                    }
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, [setting.key]: checked })
                    }
                    className="data-[state=checked]:bg-green-600"
                  />
                </div>
              ))}

              {/* Silent Hours Section */}
              <div className="border-t pt-3 sm:pt-4">
                <div className="flex items-center justify-between mb-3">
                  <Label
                    htmlFor="silent-hours"
                    className="text-sm sm:text-base text-gray-700"
                  >
                    Silent Hours
                  </Label>
                  <Switch
                    id="silent-hours"
                    checked={settings.silentHoursEnabled}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, silentHoursEnabled: checked })
                    }
                    className="data-[state=checked]:bg-green-600"
                  />
                </div>

                {settings.silentHoursEnabled && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs sm:text-sm text-gray-600">
                        Start Time
                      </Label>
                      <Select
                        value={settings.silentStart}
                        onValueChange={(value) =>
                          setSettings({ ...settings, silentStart: value })
                        }
                      >
                        <SelectTrigger className="h-8 sm:h-10 mt-1 border-green-600 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-green-600">
                          {["20:00", "21:00", "22:00", "23:00"].map((time) => (
                            <SelectItem
                              key={time}
                              value={time}
                              className="text-white hover:bg-green-700"
                            >
                              {new Date(
                                `2000-01-01T${time}`
                              ).toLocaleTimeString([], {
                                hour: "numeric",
                                minute: "2-digit",
                              })}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs sm:text-sm text-gray-600">
                        End Time
                      </Label>
                      <Select
                        value={settings.silentEnd}
                        onValueChange={(value) =>
                          setSettings({ ...settings, silentEnd: value })
                        }
                      >
                        <SelectTrigger className="h-8 sm:h-10 mt-1 border-green-600 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-green-600">
                          {["06:00", "07:00", "08:00", "09:00"].map((time) => (
                            <SelectItem
                              key={time}
                              value={time}
                              className="text-white hover:bg-green-700"
                            >
                              {new Date(
                                `2000-01-01T${time}`
                              ).toLocaleTimeString([], {
                                hour: "numeric",
                                minute: "2-digit",
                              })}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Voice & Interaction Card */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
                Voice & Interaction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              {/* Voice Type */}
              <div>
                <Label
                  htmlFor="voice-type"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Voice Type
                </Label>
                <Select
                  value={settings.voiceType}
                  onValueChange={(value) =>
                    setSettings({ ...settings, voiceType: value })
                  }
                >
                  <SelectTrigger className="mt-1 sm:mt-2 border-green-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-green-600">
                    <SelectItem
                      value="female"
                      className="text-white hover:bg-green-700"
                    >
                      Female Voice
                    </SelectItem>
                    <SelectItem
                      value="male"
                      className="text-white hover:bg-green-700"
                    >
                      Male Voice
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Speech Speed */}
              <div>
                <Label
                  htmlFor="speech-speed"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Speech Speed: {settings.speechSpeed[0]}x
                </Label>
                <Slider
                  id="speech-speed"
                  min={0.5}
                  max={2.0}
                  step={0.1}
                  value={settings.speechSpeed}
                  onValueChange={(value) =>
                    setSettings({ ...settings, speechSpeed: value })
                  }
                  className="mt-2 sm:mt-3 [&_[role=slider]]:bg-green-600 [&_[role=slider]]:border-green-600"
                />
              </div>

              {/* Voice Volume */}
              <div>
                <Label
                  htmlFor="voice-volume"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Voice Volume: {settings.voiceVolume[0]}%
                </Label>
                <Slider
                  id="voice-volume"
                  min={0}
                  max={100}
                  step={5}
                  value={settings.voiceVolume}
                  onValueChange={(value) =>
                    setSettings({ ...settings, voiceVolume: value })
                  }
                  className="mt-2 sm:mt-3 [&_[role=slider]]:bg-green-600 [&_[role=slider]]:border-green-600"
                />
              </div>

              {/* Confirmation Sounds */}
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="confirmation-sounds"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Confirmation Sounds
                </Label>
                <Switch
                  id="confirmation-sounds"
                  checked={settings.confirmationSounds}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, confirmationSounds: checked })
                  }
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Features Card */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                Accessibility Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {/* Accessibility Toggles */}
              {[
                { id: "large-text", key: "largeText", label: "Large Text" },
                {
                  id: "high-contrast",
                  key: "highContrast",
                  label: "High Contrast Mode",
                },
                {
                  id: "screen-reader",
                  key: "screenReader",
                  label: "Screen Reader Support",
                },
              ].map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between"
                >
                  <Label
                    htmlFor={setting.id}
                    className="text-sm sm:text-base text-gray-700"
                  >
                    {setting.label}
                  </Label>
                  <Switch
                    id={setting.id}
                    checked={
                      settings[setting.key as keyof typeof settings] as boolean
                    }
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, [setting.key]: checked })
                    }
                    className="data-[state=checked]:bg-green-600"
                  />
                </div>
              ))}

              {/* Button Size */}
              <div>
                <Label
                  htmlFor="button-size"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Button Size
                </Label>
                <Select
                  value={settings.buttonSize}
                  onValueChange={(value) =>
                    setSettings({ ...settings, buttonSize: value })
                  }
                >
                  <SelectTrigger className="mt-1 sm:mt-2 border-green-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-green-600">
                    {[
                      { value: "small", label: "Small" },
                      { value: "normal", label: "Normal" },
                      { value: "large", label: "Large" },
                      { value: "extra-large", label: "Extra Large" },
                    ].map((size) => (
                      <SelectItem
                        key={size.value}
                        value={size.value}
                        className="text-white hover:bg-green-700"
                      >
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Sharing Card */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                Privacy & Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {/* Privacy Toggles */}
              {[
                {
                  id: "share-family",
                  key: "shareWithFamily",
                  label: "Share Data with Family",
                },
                {
                  id: "share-doctor",
                  key: "shareWithDoctor",
                  label: "Share Data with Doctor",
                },
                {
                  id: "location-tracking",
                  key: "locationTracking",
                  label: "Location Tracking",
                },
              ].map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between"
                >
                  <Label
                    htmlFor={setting.id}
                    className="text-sm sm:text-base text-gray-700"
                  >
                    {setting.label}
                  </Label>
                  <Switch
                    id={setting.id}
                    checked={
                      settings[setting.key as keyof typeof settings] as boolean
                    }
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, [setting.key]: checked })
                    }
                    className="data-[state=checked]:bg-green-600"
                  />
                </div>
              ))}

              {/* Data Retention */}
              <div>
                <Label
                  htmlFor="data-retention"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Data Retention Period
                </Label>
                <Select
                  value={settings.dataRetention}
                  onValueChange={(value) =>
                    setSettings({ ...settings, dataRetention: value })
                  }
                >
                  <SelectTrigger className="mt-1 sm:mt-2 border-green-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-green-600">
                    {[
                      { value: "3months", label: "3 Months" },
                      { value: "6months", label: "6 Months" },
                      { value: "1year", label: "1 Year" },
                      { value: "2years", label: "2 Years" },
                      { value: "indefinite", label: "Indefinite" },
                    ].map((period) => (
                      <SelectItem
                        key={period.value}
                        value={period.value}
                        className="text-white hover:bg-green-700"
                      >
                        {period.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Message Area (you can use for feedback) */}
        <div className="text-center text-sm sm:text-base text-gray-500 pt-4">
          Changes are saved automatically when you click "Save Settings"
        </div>
      </div>
    </div>
  );
}
