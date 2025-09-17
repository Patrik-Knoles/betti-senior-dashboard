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
  CalendarIcon,
  Heart,
} from "lucide-react";

export default function HydrationPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hydrationLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:00 AM",
      amount: "8 oz",
      type: "Water",
      source: "Manual Entry",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "10:30 AM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "12:45 PM",
      amount: "12 oz",
      type: "Water with Lunch",
      source: "Manual Entry",
    },
    {
      id: 4,
      date: "2024-01-15",
      time: "03:15 PM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
    {
      id: 5,
      date: "2024-01-15",
      time: "06:00 PM",
      amount: "10 oz",
      type: "Water with Dinner",
      source: "Manual Entry",
    },
    {
      id: 6,
      date: "2024-01-15",
      time: "08:30 PM",
      amount: "6 oz",
      type: "Herbal Tea",
      source: "Manual Entry",
    },
    {
      id: 7,
      date: "2024-01-14",
      time: "07:30 AM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
    {
      id: 8,
      date: "2024-01-14",
      time: "11:00 AM",
      amount: "8 oz",
      type: "Water",
      source: "Smart Bottle",
    },
  ];

  const performanceMetrics = {
    dailyGoal: 64, // 8 glasses * 8 oz
    currentIntake: 52, // oz
    averageDaily: 58,
    status: "Good",
  };

  const filteredLogs = hydrationLogs.filter((log) => {
    if (dateFilter && !log.date.includes(dateFilter)) return false;
    if (timeFilter !== "all") {
      const hour = Number.parseInt(log.time.split(":")[0]);
      if (timeFilter === "morning" && (hour < 6 || hour >= 12)) return false;
      if (timeFilter === "afternoon" && (hour < 12 || hour >= 18)) return false;
      if (timeFilter === "evening" && (hour < 18 || hour >= 24)) return false;
    }
    return true;
  });

  const progressPercentage = Math.round(
    (performanceMetrics.currentIntake / performanceMetrics.dailyGoal) * 100
  );

  const getEncouragementMessage = () => {
    if (progressPercentage >= 100) {
      return "Fantastic hydration today! You've reached your daily goal and your body is thanking you.";
    } else if (progressPercentage >= 80) {
      return "Great job staying hydrated! You're almost at your daily goal - keep it up!";
    } else if (progressPercentage >= 60) {
      return "Good progress on your hydration! Remember, every sip counts towards better health.";
    } else {
      return "Stay hydrated for better energy and health! Small, frequent sips make a big difference.";
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
              Hydration Logs
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
                  },
                  {
                    icon: Droplets,
                    title: "Hydration",
                    desc: "Water intake logs",
                    active: true,
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

        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {performanceMetrics.currentIntake} oz
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Today's Intake
              </div>
              <Progress
                value={progressPercentage}
                className="mt-2 [&>div]:bg-green-600"
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {performanceMetrics.dailyGoal} oz
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Daily Goal</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {performanceMetrics.averageDaily} oz
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                7-Day Average
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <Badge className="bg-green-600 text-white text-xs">
                  {performanceMetrics.status}
                </Badge>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Performance Status
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
                  Filter by Time of Day
                </label>
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Day</SelectItem>
                    <SelectItem value="morning">
                      Morning (6 AM - 12 PM)
                    </SelectItem>
                    <SelectItem value="afternoon">
                      Afternoon (12 PM - 6 PM)
                    </SelectItem>
                    <SelectItem value="evening">
                      Evening (6 PM - 12 AM)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hydration History */}
        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-green-600 text-lg sm:text-xl">
              <Droplets className="h-4 w-4 sm:h-5 sm:w-5" />
              Hydration History ({filteredLogs.length} entries)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-100 rounded-lg gap-2 sm:gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm font-medium">
                        {log.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm">{log.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm">{log.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto">
                    <span className="text-base sm:text-lg font-bold text-green-600">
                      {log.amount}
                    </span>
                    <Badge
                      className={`text-xs ${
                        log.source === "Smart Bottle"
                          ? "bg-green-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {log.source}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
