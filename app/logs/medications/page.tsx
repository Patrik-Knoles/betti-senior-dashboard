"use client";

import { useState } from "react";
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
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Utensils,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle,
  Filter,
  Menu,
  X,
  User,
  Settings,
  Droplets,
  Pill,
  MapPin,
  Heart,
} from "lucide-react";

export default function MedicationsPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const medicationLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:00 AM",
      medication: "Lisinopril 10mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Blood Pressure",
      sideEffects: "None",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "02:00 PM",
      medication: "Metformin 500mg",
      dosage: "1 tablet",
      status: "Missed",
      condition: "Diabetes",
      sideEffects: "None",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "08:00 PM",
      medication: "Atorvastatin 20mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Cholesterol",
      sideEffects: "None",
    },
    {
      id: 4,
      date: "2024-01-14",
      time: "08:00 AM",
      medication: "Lisinopril 10mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Blood Pressure",
      sideEffects: "None",
    },
    {
      id: 5,
      date: "2024-01-14",
      time: "02:00 PM",
      medication: "Metformin 500mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Diabetes",
      sideEffects: "Mild nausea",
    },
    {
      id: 6,
      date: "2024-01-14",
      time: "08:00 PM",
      medication: "Atorvastatin 20mg",
      dosage: "1 tablet",
      status: "Taken",
      condition: "Cholesterol",
      sideEffects: "None",
    },
  ];

  const healthMetrics = {
    adherenceRate: 88,
    improvementScore: 92,
    status: "Excellent",
    trend: "Improving",
  };

  const filteredMedications = medicationLogs.filter((med) => {
    if (dateFilter && !med.date.includes(dateFilter)) return false;
    if (statusFilter !== "all" && med.status.toLowerCase() !== statusFilter)
      return false;
    return true;
  });

  const getEncouragementMessage = () => {
    if (healthMetrics.adherenceRate >= 90) {
      return "Outstanding medication adherence! Your commitment to your health is truly inspiring.";
    } else if (healthMetrics.adherenceRate >= 80) {
      return "Great job staying on track with your medications! Keep up the excellent work.";
    } else if (healthMetrics.adherenceRate >= 70) {
      return "You're doing well with your medication routine. Small improvements can make a big difference!";
    } else {
      return "Every step towards better medication adherence is progress. You've got this!";
    }
  };

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4 lg:p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
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
              Medication History
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 self-start sm:self-auto"
          >
            <Menu className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">Menu</span>
          </Button>
        </div>

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
                    active: true,
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

        {/* Health Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {healthMetrics.adherenceRate}%
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Adherence Rate
              </div>
              <Progress
                value={healthMetrics.adherenceRate}
                className="mt-2 [&>div]:bg-green-600"
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {healthMetrics.improvementScore}%
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Health Improvement
              </div>
              <Progress
                value={healthMetrics.improvementScore}
                className="mt-2 [&>div]:bg-green-600"
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <Badge className="bg-green-600 text-white text-xs">
                  {healthMetrics.status}
                </Badge>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Overall Status
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {healthMetrics.trend}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Health Trend
              </div>
            </CardContent>
          </Card>
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
                    <SelectItem value="taken">Taken</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medications List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredMedications.map((med) => (
            <Card
              key={med.id}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <CardTitle className="flex items-center gap-2 text-green-600 text-lg sm:text-xl">
                    <Pill className="h-4 w-4 sm:h-5 sm:w-5" />
                    {med.medication}
                  </CardTitle>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {med.status === "Taken" ? (
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                    )}
                    <Badge
                      className={`text-xs sm:text-sm ${
                        med.status === "Taken"
                          ? "bg-green-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {med.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm font-medium">
                        {med.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm">{med.time}</span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="font-medium">Dosage: </span>
                      <span>{med.dosage}</span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="font-medium">Condition: </span>
                      <span className="text-green-600 font-medium">
                        {med.condition}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Side Effects:
                    </div>
                    <div className="text-xs sm:text-sm">
                      {med.sideEffects === "None" ? (
                        <span className="text-green-600 font-medium">
                          No side effects reported
                        </span>
                      ) : (
                        <span className="text-orange-600 font-medium">
                          {med.sideEffects}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Encouragement Footer */}
        <footer className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg text-center bg-blue-600 text-white">
          <p className="text-sm sm:text-base lg:text-lg font-serif leading-relaxed">
            {getEncouragementMessage()}
          </p>
        </footer>
      </div>
    </div>
  );
}
