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
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  Filter,
  Menu,
  X,
  User,
  Settings,
  Droplets,
  Pill,
  Utensils,
} from "lucide-react";

export default function RestroomActivityPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const restroomLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:30 AM",
      duration: "3 min",
      location: "Main Bathroom",
      frequency: "Normal",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "11:45 AM",
      duration: "2 min",
      location: "Main Bathroom",
      frequency: "Normal",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "02:15 PM",
      duration: "4 min",
      location: "Main Bathroom",
      frequency: "Normal",
    },
    {
      id: 4,
      date: "2024-01-15",
      time: "05:30 PM",
      duration: "3 min",
      location: "Main Bathroom",
      frequency: "Normal",
    },
    {
      id: 5,
      date: "2024-01-14",
      time: "09:00 AM",
      duration: "5 min",
      location: "Main Bathroom",
      frequency: "Longer",
    },
  ];

  const performanceMetrics = {
    averageDaily: 4.2,
    averageDuration: "3.1 min",
    status: "Good",
    trend: "Stable",
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const filteredLogs = restroomLogs.filter((log) => {
    if (dateFilter && !log.date.includes(dateFilter)) return false;
    if (timeFilter !== "all") {
      const hour = Number.parseInt(log.time.split(":")[0]);
      if (timeFilter === "morning" && (hour < 6 || hour >= 12)) return false;
      if (timeFilter === "afternoon" && (hour < 12 || hour >= 18)) return false;
      if (timeFilter === "evening" && (hour < 18 || hour >= 24)) return false;
    }
    return true;
  });

  const getEncouragementMessage = () => {
    const avgDaily = performanceMetrics.averageDaily;
    if (avgDaily >= 4 && avgDaily <= 6) {
      return "Great job maintaining healthy restroom habits! Your regularity shows excellent digestive health.";
    } else if (avgDaily < 4) {
      return "Consider staying hydrated and eating fiber-rich foods to support healthy digestion.";
    } else {
      return "Your activity levels look good. Keep monitoring for any changes in your routine.";
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-serif text-secondary-blue">
              Restroom Activity Logs
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMenu}
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Menu className="h-4 w-4" />
            Menu
          </Button>
        </div>

        {/* Side Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50"
            onClick={toggleMenu}
          >
            <div
              className="fixed right-0 top-0 h-full w-4/5 sm:w-80 bg-white shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-serif text-secondary-blue">
                  Menu
                </h2>
                <Button onClick={toggleMenu} variant="ghost" size="sm">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-3">
                {/* Menu Links */}
                <Link href="/profile">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left p-4 h-auto bg-transparent"
                  >
                    <User className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Profile</div>
                      <div className="text-sm text-alt-dark-gray">
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
                    <Settings className="mr-3 h-5 w-5 text-secondary-blue" />
                    <div>
                      <div className="font-medium">Settings</div>
                      <div className="text-sm text-alt-dark-gray">
                        App preferences
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Average Daily Visits",
              value: performanceMetrics.averageDaily,
            },
            {
              label: "Average Duration",
              value: performanceMetrics.averageDuration,
            },
            { label: "Performance Status", value: performanceMetrics.status },
            { label: "Trend", value: performanceMetrics.trend },
          ].map((metric, idx) => (
            <Card key={idx} className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-4 flex flex-col items-center sm:items-start">
                <div className="text-xl sm:text-2xl font-bold text-[#5C7F39]">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {metric.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5C7F39]">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  Filter by Date
                </label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  Filter by Time of Day
                </label>
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger>
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

        {/* Activity History */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5C7F39]">
              <MapPin className="h-5 w-5" />
              Activity History ({filteredLogs.length} entries)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 bg-gray-100 rounded-lg"
                >
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium">{log.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{log.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{log.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      Duration: {log.duration}
                    </span>
                    <Badge
                      style={{
                        backgroundColor:
                          log.frequency === "Normal" ? "#5C7F39" : "#233E7D",
                        color: "#fff",
                      }}
                    >
                      {log.frequency}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <Card className="shadow-lg bg-[#233E7D]">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-white" />
              <h3 className="text-lg font-serif text-white">
                Daily Encouragement
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              {getEncouragementMessage()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
