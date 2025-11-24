"use client";

import type React from "react";

import { useState } from "react";
import { AlertCircle } from "lucide-react"
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
  Heart,
  Phone,
  CreditCard,
  BarChart3,
  Code2,
  FileText,
  Zap,
  X,
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

  
  const [openModal, setOpenModal] = useState<string | null>(null)

  const [modalData, setModalData] = useState<any>({})

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

  const handleUpdatePayer = () => {
    setModalData({
      title: "Update Payer Information",
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-alt-dark-gray mb-2">Primary Insurance Provider</label>
            <input
              type="text"
              defaultValue="Blue Cross Blue Shield"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-alt-dark-gray mb-2">Member ID</label>
            <input
              type="text"
              defaultValue="XXX-XX-1234"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-alt-dark-gray mb-2">Secondary Insurance</label>
            <input
              type="text"
              placeholder="None on file"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
          </div>
        </div>
      ),
    })
    setOpenModal("updatePayer")
  }

  const handleExportCSV = () => {
    setModalData({
      title: "Export Billing Data as CSV",
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-alt-dark-gray mb-2">Select Date Range</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
              <input
                type="date"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-alt-dark-gray">📥 CSV file will be downloaded to your computer</p>
          </div>
        </div>
      ),
    })
    setOpenModal("exportCSV")
  }

  const handleExportFHIR = () => {
    setModalData({
      title: "Export Billing Data as FHIR",
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-alt-dark-gray mb-2">Select Date Range</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
              <input
                type="date"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-alt-dark-gray">📥 FHIR format file will be downloaded to your computer</p>
          </div>
        </div>
      ),
    })
    setOpenModal("exportFHIR")
  }

  const handleSupportChat = () => {
    setModalData({
      title: "Start Support Chat",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-sm font-medium text-green-700 mb-2">✓ Support Team Available</div>
            <p className="text-sm text-green-600">Our support team is currently online and ready to assist you.</p>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-alt-dark-gray">Contact Options:</div>
            <div className="text-sm text-alt-dark-gray">📞 Phone: 1-800-BETTI-01</div>
            <div className="text-sm text-alt-dark-gray">📧 Email: support@betti.com</div>
            <div className="text-sm text-alt-dark-gray">💬 Live Chat will open in a new window</div>
          </div>
        </div>
      ),
    })
    setOpenModal("supportChat")
  }

  const handleViewMappingTable = () => {
    setModalData({
      title: "CPT Code Claims Mapping",
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-alt-light-gray">
                <tr>
                  <th className="px-3 py-2 text-left text-alt-dark-gray">CPT Code</th>
                  <th className="px-3 py-2 text-left text-alt-dark-gray">Description</th>
                  <th className="px-3 py-2 text-left text-alt-dark-gray">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2">99457</td>
                  <td className="px-3 py-2">Remote Monitoring 16-30 min</td>
                  <td className="px-3 py-2">
                    <span className="text-green-600 font-medium">✓ Mapped</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">99458</td>
                  <td className="px-3 py-2">Remote Monitoring 31+ min</td>
                  <td className="px-3 py-2">
                    <span className="text-green-600 font-medium">✓ Mapped</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">99490</td>
                  <td className="px-3 py-2">Chronic Care Management</td>
                  <td className="px-3 py-2">
                    <span className="text-red-600 font-medium">⚠ Unmapped</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    })
    setOpenModal("mappingTable")
  }

  const handleOpenExportCenter = () => {
    setModalData({
      title: "RPM Billing Export Center",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-alt-light-gray p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-green">5</div>
              <div className="text-sm text-alt-dark-gray">Exports This Month</div>
            </div>
            <div className="bg-alt-light-gray p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-500">Jan 20</div>
              <div className="text-sm text-alt-dark-gray">Next Export</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-alt-dark-gray">Available Formats:</div>
            <button className="w-full px-3 py-2 text-left text-sm text-alt-dark-gray hover:bg-alt-light-gray rounded-lg border border-gray-300">
              CSV Export
            </button>
            <button className="w-full px-3 py-2 text-left text-sm text-alt-dark-gray hover:bg-alt-light-gray rounded-lg border border-gray-300">
              X12 EDI Format
            </button>
            <button className="w-full px-3 py-2 text-left text-sm text-alt-dark-gray hover:bg-alt-light-gray rounded-lg border border-gray-300">
              FHIR Format
            </button>
          </div>
        </div>
      ),
    })
    setOpenModal("exportCenter")
  }

  const handleConfigureRules = () => {
    setModalData({
      title: "Configure Prior Authorization Rules",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-alt-light-gray rounded-lg">
              <div>
                <div className="text-sm font-medium text-alt-dark-gray">Rule 1: High Medication Cost</div>
                <div className="text-xs text-alt-dark-gray mt-1">Triggers when cost exceeds $500</div>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-alt-light-gray rounded-lg">
              <div>
                <div className="text-sm font-medium text-alt-dark-gray">Rule 2: Multiple Specialists</div>
                <div className="text-xs text-alt-dark-gray mt-1">Triggers when more than 3 specialists billed</div>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-alt-light-gray rounded-lg">
              <div>
                <div className="text-sm font-medium text-alt-dark-gray">Rule 3: Repetitive Testing</div>
                <div className="text-xs text-alt-dark-gray mt-1">Triggers on duplicate tests within 30 days</div>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
          </div>
        </div>
      ),
    })
    setOpenModal("configureRules")
  }

  const handleReviewLogs = () => {
    setModalData({
      title: "ADR Response Automation Logs",
      content: (
        <div className="space-y-4">
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {[
              { time: "Jan 14, 10:30 AM", status: "✓ Sent", message: "ADR response sent for claim #12345" },
              { time: "Jan 13, 2:15 PM", status: "✓ Sent", message: "ADR response sent for claim #12344" },
              { time: "Jan 12, 9:45 AM", status: "⏳ Pending", message: "Awaiting payer response for claim #12343" },
              { time: "Jan 11, 4:20 PM", status: "✓ Sent", message: "ADR response sent for claim #12342" },
            ].map((log, idx) => (
              <div key={idx} className="p-3 bg-alt-light-gray rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-xs font-medium text-alt-dark-gray">{log.time}</div>
                  <span className="text-xs font-medium">{log.status}</span>
                </div>
                <div className="text-sm text-alt-dark-gray">{log.message}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    })
    setOpenModal("reviewLogs")
  }

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

          {/* Billing and Payer Integration Section */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <CreditCard className="h-5 w-5" />
                Payer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  Insurance / Payer Information
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  Primary: Blue Cross Blue Shield
                </div>
                <div className="text-sm text-alt-dark-gray">
                  Member ID: XXX-XX-1234
                </div>
              </div>

              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  Secondary Insurance
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  None on file
                </div>
              </div>

              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  Prior Authorisation Automation
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  Status: Approved
                </div>
                <div className="text-sm text-alt-dark-gray">
                  Next Review: Jan 15, 2025
                </div>
              </div>

              <Button
                onClick={handleUpdatePayer}
                className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white"
              >
                Update Payer Information
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <BarChart3 className="h-5 w-5" />
                Billing Summary & Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  RPM Billing Summary
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  Current Month: $250.00
                </div>
                <div className="text-sm text-alt-dark-gray">
                  Year-to-Date: $2,500.00
                </div>
              </div>

              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  Monthly Billing Reports
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  Remote Patient Monitoring (RPM): $200
                </div>
                <div className="text-sm text-alt-dark-gray">
                  Chronic Care Management (CCM): $50
                </div>
                <div className="text-sm text-alt-dark-gray">
                  Principal Care Management (PCM): $0
                </div>
              </div>

              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  Last Billed
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  November 1, 2024
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handleExportCSV}
                  className="flex-1 bg-primary-green hover:bg-primary-green/90 text-white"
                >
                  Export CSV
                </Button>
                <Button
                  onClick={handleExportFHIR}
                  className="flex-1 bg-secondary-blue hover:bg-secondary-blue/90 text-white"
                >
                  Export FHIR
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Phone className="h-5 w-5" />
                Contact Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-alt-light-gray p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 bg-primary-green rounded-full"></div>
                  <div className="font-medium text-alt-dark-gray">
                    24/7 Support Team
                  </div>
                </div>
                <div className="text-sm text-alt-dark-gray">
                  <div>📞 1-800-BETTI-01</div>
                  <div>📧 support@betti.com</div>
                  <div>💬 Live Chat Available</div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div className="font-medium text-red-700">
                    Emergency Services
                  </div>
                </div>
                <div className="text-sm text-red-600">
                  <div>🚑 Call 911 for immediate assistance</div>
                </div>
              </div>

              <Button
                onClick={handleSupportChat}
                className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Start Support Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Code2 className="h-5 w-5" />
                CPT Code Claims Mapping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary-green">
                    42
                  </div>
                  <div className="text-sm text-alt-dark-gray">Mapped Codes</div>
                </div>
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-alt-dark-gray">Unmapped</div>
                </div>
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-sm font-medium text-alt-dark-gray">
                    Jan 14
                  </div>
                  <div className="text-sm text-alt-dark-gray">Last Update</div>
                </div>
              </div>
              <Button
                onClick={handleViewMappingTable}
                className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white"
              >
                View Mapping Table
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <FileText className="h-5 w-5" />
                RPM Billing Export
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-sm font-medium text-alt-dark-gray">
                    Jan 20
                  </div>
                  <div className="text-sm text-alt-dark-gray">Next Export</div>
                </div>
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary-green">5</div>
                  <div className="text-sm text-alt-dark-gray">This Month</div>
                </div>
              </div>
              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">
                  Export Formats
                </div>
                <div className="text-sm text-alt-dark-gray mt-1">
                  CSV / X12 / FHIR
                </div>
              </div>
              <Button
                onClick={handleOpenExportCenter}
                className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white"
              >
                Open Export Center
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <AlertCircle className="h-5 w-5" />
                Prior Authorization Triggers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary-green">4</div>
                  <div className="text-sm text-alt-dark-gray">Active Rules</div>
                </div>
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">12</div>
                  <div className="text-sm text-alt-dark-gray">This Week</div>
                </div>
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-alt-dark-gray">Flagged</div>
                </div>
              </div>
              <Button
                onClick={handleConfigureRules}
                className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white"
              >
                Configure Rules
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif">
                <Zap className="h-5 w-5" />
                ADR Response Automation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary-green pl-4 py-2">
                <div className="font-medium text-alt-dark-gray">Status</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <div className="text-sm text-alt-dark-gray">Enabled</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary-green">
                    18
                  </div>
                  <div className="text-sm text-alt-dark-gray">
                    Responses Sent
                  </div>
                </div>
                <div className="bg-alt-light-gray p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">2</div>
                  <div className="text-sm text-alt-dark-gray">Pending</div>
                </div>
              </div>
              <Button
                onClick={handleReviewLogs}
                className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white"
              >
                Review Automation Logs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
        {openModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between border-b">
                <CardTitle className="text-primary-green font-serif">{modalData.title}</CardTitle>
                <button onClick={() => setOpenModal(null)} className="text-alt-dark-gray hover:text-alt-dark-gray/70">
                  <X className="h-5 w-5" />
                </button>
              </CardHeader>
              <CardContent className="pt-6">
                {modalData.content}
                <div className="mt-6 flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setOpenModal(null)}>
                    Close
                  </Button>
                  <Button className="bg-primary-green hover:bg-primary-green/90 text-white">Confirm</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

      {/* Success Message Area (you can use for feedback) */}
      <div className="text-center text-sm sm:text-base text-gray-500 pt-4">
        Changes are saved automatically when you click "Save Settings"
      </div>
    </div>
  );
}
