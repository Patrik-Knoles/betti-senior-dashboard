"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Droplets,
  Pill,
  Activity,
  Shield,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  Bed,
  Footprints,
  Utensils,
  Calendar,
  Lock,
  Home,
  AlertTriangle,
  Menu,
  X,
  User,
  Settings,
} from "lucide-react";

export default function SeniorDashboard() {
  const [wellBeingScore] = useState(85);
  const [lastOkTime, setLastOkTime] = useState("2 hours ago");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [latestAlert, setLatestAlert] = useState<string | null>(null);
  const [okButtonText, setOkButtonText] = useState("I'm OK");
  const [showAlertSnapshot, setShowAlertSnapshot] = useState(false);
  const [emergencyStatus, setEmergencyStatus] = useState("");

  useEffect(() => {
    const hasShownAlert = sessionStorage.getItem("alertShown");

    if (!hasShownAlert) {
      const alerts = [
        "Medication reminder: Take your afternoon pills",
        "Hydration reminder: You haven't had water in 3 hours",
        "Restroom reminder: It's been 4 hours since your last visit",
        "Shower reminder: Daily shower scheduled for 2 PM",
      ];

      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
      setLatestAlert(randomAlert);
      sessionStorage.setItem("alertShown", "true");

      const timer = setTimeout(() => {
        setLatestAlert(null);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOkButton = () => {
    setOkButtonText("Thank you! Status recorded.");
    setLastOkTime("Just now");
    setTimeout(() => {
      setOkButtonText("I'm OK");
    }, 3000);
  };

  const handlePanicButton = () => {
    setEmergencyStatus("Calling 911...");
    setTimeout(() => {
      setEmergencyStatus("Emergency services contacted. Help is on the way.");
    }, 2000);
    setTimeout(() => {
      setEmergencyStatus("");
    }, 8000);
  };

  const handleViewAlerts = () => {
    setShowAlertSnapshot(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dismissAlert = () => {
    setLatestAlert(null);
  };

  const alertsSnapshot = [
    {
      id: 1,
      message: "Medication reminder: Take your afternoon pills",
      time: "2:00 PM",
      priority: "high",
    },
    {
      id: 2,
      message: "Hydration reminder: You haven't had water in 3 hours",
      time: "1:30 PM",
      priority: "medium",
    },
    {
      id: 3,
      message: "Restroom reminder: It's been 4 hours since your last visit",
      time: "12:45 PM",
      priority: "medium",
    },
    {
      id: 4,
      message: "Shower reminder: Daily shower scheduled for 2 PM",
      time: "11:00 AM",
      priority: "low",
    },
    {
      id: 5,
      message: "Appointment reminder: Dr. Smith tomorrow at 2:00 PM",
      time: "10:30 AM",
      priority: "high",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-2 sm:py-4 lg:py-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Alert Modal */}
        {latestAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full text-center shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-xl font-serif text-blue-800 mb-2">
                Hello, Margaret!
              </h2>
              <div className="border border-gray-300 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                  <div className="font-medium text-green-600">Latest Alert</div>
                </div>
                <div className="text-gray-600">{latestAlert}</div>
              </div>
              <Button
                onClick={dismissAlert}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2"
              >
                Got it!
              </Button>
            </div>
          </div>
        )}

        {/* Header/Navbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Heart className="h-7 w-7 lg:h-8 lg:w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-serif text-blue-800">
                Betti Dashboard
              </h1>
              <p className="text-base lg:text-lg text-gray-600">
                Welcome Back, Margaret
              </p>
            </div>
          </div>

          <Button
            onClick={toggleMenu}
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent self-start sm:self-auto"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Side Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50"
            onClick={toggleMenu}
          >
            <div
              className="fixed right-0 top-0 h-full w-72 sm:w-80 bg-white shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-blue-800">Menu</h2>
                <Button onClick={toggleMenu} variant="ghost" size="sm">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <Link href="/profile">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <User className="mr-3 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Profile</div>
                      <div className="text-sm text-gray-500">
                        Personal information
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/settings">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <Settings className="mr-3 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Settings</div>
                      <div className="text-sm text-gray-500">
                        App preferences
                      </div>
                    </div>
                  </Button>
                </Link>

                <hr className="my-4 border-gray-200" />

                <div className="text-sm font-medium text-gray-500 mb-2">
                  Activity Logs
                </div>

                {[
                  {
                    icon: MapPin,
                    title: "Restroom Activity",
                    desc: "View bathroom visits",
                    route: "restroom",
                  },
                  {
                    icon: Calendar,
                    title: "Appointments",
                    desc: "Medical appointments log",
                    route: "appointments",
                  },
                  {
                    icon: Utensils,
                    title: "Meals",
                    desc: "Food intake tracking",
                    route: "meals",
                  },
                  {
                    icon: Pill,
                    title: "Medications",
                    desc: "Medication history",
                    route: "medications",
                  },
                  {
                    icon: Droplets,
                    title: "Hydration",
                    desc: "Water intake logs",
                    route: "hydration",
                  },
                ].map((item, index) => (
                  <Link key={index} href={`/logs/${item.route}`}>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left p-4 h-auto bg-transparent"
                    >
                      <item.icon className="mr-3 h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Well-being Score Card */}
          <Card className="lg:col-span-2 bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                Daily Well-being Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600">
                  {wellBeingScore}
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-sm text-gray-500">Out of 100</div>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-green-600 text-white">
                    Excellent
                  </span>
                </div>
              </div>
              <Progress
                value={wellBeingScore}
                className="mb-4 [&>div]:bg-green-600"
              />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm">
                {[
                  { icon: Droplets, label: "Hydration", value: "Good" },
                  { icon: Bed, label: "Sleep", value: "7.5 hrs" },
                  { icon: Pill, label: "Medications", value: "On track" },
                  { icon: Footprints, label: "Movement", value: "Active" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 text-green-600" />
                    <div className="font-medium text-gray-600 text-xs sm:text-sm">
                      {item.label}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Sidebar Cards */}
          <div className="space-y-4">
            {/* Quick Check-in */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-3">
                <CardTitle className="text-green-600 font-serif text-lg sm:text-xl">
                  Quick Check-in
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleOkButton}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg py-4 sm:py-6"
                >
                  <CheckCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  {okButtonText}
                </Button>
                <div className="text-xs sm:text-sm text-gray-500 text-center">
                  Last check-in: {lastOkTime}
                </div>
              </CardContent>
            </Card>

            {/* Emergency */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-3">
                <CardTitle className="text-green-600 font-serif text-lg sm:text-xl">
                  Emergency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handlePanicButton}
                  variant="destructive"
                  className="w-full text-base sm:text-lg py-4 sm:py-6"
                >
                  <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Panic Button
                </Button>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-3">
                <CardTitle className="text-green-600 font-serif text-lg sm:text-xl">
                  Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleViewAlerts}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  View Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: Droplets,
              title: "Hydration",
              value: "6/8",
              subtitle: "Glasses today",
              progress: 75,
              goal: "Goal: 8 glasses daily",
            },
            {
              icon: Pill,
              title: "Medications",
              value: "3/4",
              subtitle: "Taken today",
              progress: null,
              details: [
                { label: "Morning pills", status: "done" },
                { label: "Afternoon pills", status: "pending" },
              ],
            },
            {
              icon: Utensils,
              title: "Meals",
              value: "2/3",
              subtitle: "Meals today",
              progress: null,
              details: [
                { label: "Breakfast", status: "done" },
                { label: "Lunch", status: "done" },
                { label: "Dinner", status: "pending" },
              ],
            },
            {
              icon: Activity,
              title: "Activity",
              value: "2,847",
              subtitle: "Steps today",
              progress: 57,
              goal: "Goal: 5,000 steps daily",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-base sm:text-lg">
                  <card.icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  {card.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mb-3">
                  {card.subtitle}
                </div>
                {card.progress && (
                  <>
                    <Progress
                      value={card.progress}
                      className="mb-2 [&>div]:bg-green-600"
                    />
                    <div className="text-xs text-gray-500">{card.goal}</div>
                  </>
                )}
                {card.details && (
                  <div className="space-y-2 text-xs sm:text-sm">
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-gray-500">{detail.label}</span>
                        {detail.status === "done" ? (
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        ) : (
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Appointments */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-base sm:text-lg">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    doctor: "Dr. Smith",
                    time: "Tomorrow 2:00 PM",
                    status: "Confirmed",
                    color: "bg-green-600",
                  },
                  {
                    doctor: "Physical Therapy",
                    time: "Friday 10:00 AM",
                    status: "Scheduled",
                    color: "bg-blue-600",
                  },
                ].map((apt, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-gray-100 rounded gap-2"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-xs sm:text-sm text-gray-700">
                        {apt.doctor}
                      </div>
                      <div className="text-xs text-gray-500">{apt.time}</div>
                    </div>
                    <Badge
                      className={`${apt.color} text-white text-xs self-start sm:self-auto`}
                    >
                      {apt.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Smart Home */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-base sm:text-lg">
                <Home className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                Smart Home
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Lock, label: "Front Door", status: "Locked" },
                  { icon: Lock, label: "Back Door", status: "Locked" },
                  { icon: Home, label: "Security System", status: "Armed" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-600">
                        {item.label}
                      </span>
                    </div>
                    <Badge className="bg-green-600 text-white text-xs">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Restroom Activity */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-base sm:text-lg">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                Restroom Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">
                4
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-4">
                Visits today
              </div>
              <div className="text-xs sm:text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500">Last visit:</span>
                  <span className="text-gray-600">1 hour ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Average frequency:</span>
                  <span className="text-gray-600">Normal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Safety Status */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-base sm:text-lg">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                Safety Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: "Fall Detection", status: "Active" },
                  { label: "Emergency Contacts", status: "3 Available" },
                  { label: "Voice Assistant", status: "Connected" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm text-gray-600">
                      {item.label}
                    </span>
                    <Badge className="bg-green-600 text-white text-xs">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Location */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-base sm:text-lg">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">
                Living Room
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-4">
                Last updated: 5 minutes ago
              </div>
              <div className="text-xs sm:text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Time in room:</span>
                  <span className="text-gray-600">45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Activity level:</span>
                  <span className="text-gray-600">Normal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Encouragement */}
        <Card className="bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif mb-2">
                Daily Encouragement
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                You're doing wonderfully today, Margaret! Your consistent health
                habits are paying off. Remember, every small step counts toward
                your well-being. Your family is proud of how well you're taking
                care of yourself.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
