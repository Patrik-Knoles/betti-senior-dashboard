"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  FileText,
  CheckCircle,
  Filter,
  Menu,
  X,
  Settings,
  MapPin,
  Utensils,
  Pill,
  Droplets,
  Heart,
} from "lucide-react";

export default function AppointmentsPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [confirmedNotes, setConfirmedNotes] = useState<number[]>([]);

  const appointments = [
    {
      id: 1,
      date: "2024-01-16",
      time: "02:00 PM",
      doctor: "Dr. Smith",
      type: "General Checkup",
      status: "Confirmed",
      notes:
        "Blood pressure check and routine examination. Patient is doing well.",
      noteConfirmed: false,
    },
    {
      id: 2,
      date: "2024-01-18",
      time: "10:00 AM",
      doctor: "Physical Therapist",
      type: "Physical Therapy",
      status: "Scheduled",
      notes: "",
      noteConfirmed: false,
    },
    {
      id: 3,
      date: "2024-01-10",
      time: "09:30 AM",
      doctor: "Dr. Johnson",
      type: "Cardiology",
      status: "Completed",
      notes:
        "Heart rate and rhythm normal. Continue current medication regimen. Next visit in 3 months.",
      noteConfirmed: true,
    },
    {
      id: 4,
      date: "2024-01-05",
      time: "11:15 AM",
      doctor: "Dr. Williams",
      type: "Dermatology",
      status: "Completed",
      notes:
        "Skin examination complete. Minor age spots noted, no concerns. Use sunscreen daily.",
      noteConfirmed: true,
    },
    {
      id: 5,
      date: "2023-12-28",
      time: "03:45 PM",
      doctor: "Dr. Brown",
      type: "Eye Exam",
      status: "Completed",
      notes:
        "Vision stable. Prescription unchanged. Schedule next exam in 12 months.",
      noteConfirmed: false,
    },
  ];

  const handleConfirmNote = (appointmentId: number) => {
    setConfirmedNotes((prev) => [...prev, appointmentId]);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    if (dateFilter && !appointment.date.includes(dateFilter)) return false;
    if (
      statusFilter !== "all" &&
      appointment.status.toLowerCase() !== statusFilter
    )
      return false;
    return true;
  });

  const completedAppointments = appointments.filter(
    (apt) => apt.status === "Completed"
  ).length;
  const totalAppointments = appointments.length;
  const completionRate = Math.round(
    (completedAppointments / totalAppointments) * 100
  );

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4 lg:p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Side Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50"
            onClick={toggleMenu}
          >
            <div
              className="fixed right-0 top-0 h-full w-72 sm:w-80 bg-white shadow-lg p-4 sm:p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif text-blue-800">
                  Menu
                </h2>
                <Button onClick={toggleMenu} variant="ghost" size="sm">
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <Link href="/dashboard" className="space-y-3 sm:space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-3 sm:p-4 h-auto bg-transparent"
                  >
                    <User className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm sm:text-base">
                        Profile
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        Personal information
                      </div>
                    </div>
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left p-3 sm:p-4 h-auto bg-transparent"
                >
                  <Settings className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">
                      Settings
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      App preferences
                    </div>
                  </div>
                </Button>

                <hr className="my-3 sm:my-4 border-gray-200" />

                <div className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                  Activity Logs
                </div>

                {[
                  {
                    icon: MapPin,
                    title: "Restroom Activity",
                    desc: "View bathroom visits",
                  },
                  {
                    icon: Calendar,
                    title: "Appointments",
                    desc: "Medical appointments log",
                    active: true,
                  },
                  {
                    icon: Utensils,
                    title: "Meals",
                    desc: "Food intake tracking",
                  },
                  {
                    icon: Pill,
                    title: "Medications",
                    desc: "Medication history",
                  },
                  {
                    icon: Droplets,
                    title: "Hydration",
                    desc: "Water intake logs",
                  },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full justify-start text-left p-3 sm:p-4 h-auto bg-transparent ${
                      item.active ? "border-green-600" : ""
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-4 w-4 sm:h-5 sm:w-5 ${
                        item.active ? "text-green-600" : "text-blue-600"
                      }`}
                    />
                    <div>
                      <div
                        className={`font-medium text-sm sm:text-base ${
                          item.active ? "text-green-600" : ""
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        {item.desc}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="self-start sm:self-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              <span className="text-xs sm:text-sm">Back to Dashboard</span>
            </Button>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif text-blue-800">
              Medical Appointments
            </h1>
          </div>

          <Button
            onClick={toggleMenu}
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent self-start sm:self-auto"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>

        {/* Filters Card */}
        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-green-600 text-lg sm:text-xl">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-600 mb-2 block">
                  Filter by Date
                </label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-600 mb-2 block">
                  Filter by Status
                </label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredAppointments.map((appointment) => (
            <Card
              key={appointment.id}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="flex items-center gap-2 text-green-600 text-lg sm:text-xl">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    {appointment.type}
                  </CardTitle>
                  <Badge
                    className={`text-xs sm:text-sm self-start sm:self-auto ${
                      appointment.status === "Completed"
                        ? "bg-green-600 text-white"
                        : appointment.status === "Confirmed"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {appointment.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                    <span className="text-xs sm:text-sm font-medium">
                      {appointment.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                    <span className="text-xs sm:text-sm">
                      {appointment.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                    <span className="text-xs sm:text-sm">
                      {appointment.doctor}
                    </span>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 sm:mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          Doctor's Notes
                        </span>
                      </div>
                      {(appointment.noteConfirmed ||
                        confirmedNotes.includes(appointment.id)) && (
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 self-start sm:self-auto" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                      {appointment.notes}
                    </p>
                    {!appointment.noteConfirmed &&
                      !confirmedNotes.includes(appointment.id) &&
                      appointment.status === "Completed" && (
                        <Button
                          onClick={() => handleConfirmNote(appointment.id)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm"
                        >
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Confirm Receipt of Note
                        </Button>
                      )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health Journey Progress */}
        <Card className="bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif mb-2">
                Health Journey Progress
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                {completionRate >= 80
                  ? "Excellent work staying on top of your medical appointments! Your commitment to regular check-ups is keeping you healthy and strong."
                  : completionRate >= 60
                  ? "You're doing well with your medical care! Keep up the good work attending your appointments and following your doctor's advice."
                  : "Remember, regular medical check-ups are important for your health. Don't hesitate to schedule appointments when needed - your health is worth it!"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
