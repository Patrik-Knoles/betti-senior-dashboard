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

export default function MealsPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [mealFilter, setMealFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mealLogs = [
    {
      id: 1,
      date: "2024-01-15",
      time: "08:00 AM",
      meal: "Breakfast",
      items: ["Oatmeal with berries", "Orange juice", "Coffee"],
      calories: 350,
      nutrition: "Balanced",
    },
    {
      id: 2,
      date: "2024-01-15",
      time: "12:30 PM",
      meal: "Lunch",
      items: ["Grilled chicken salad", "Whole grain roll", "Water"],
      calories: 420,
      nutrition: "Excellent",
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "06:00 PM",
      meal: "Dinner",
      items: ["Baked salmon", "Steamed vegetables", "Brown rice"],
      calories: 480,
      nutrition: "Excellent",
    },
    {
      id: 4,
      date: "2024-01-14",
      time: "08:15 AM",
      meal: "Breakfast",
      items: ["Scrambled eggs", "Toast", "Apple juice"],
      calories: 320,
      nutrition: "Good",
    },
    {
      id: 5,
      date: "2024-01-14",
      time: "01:00 PM",
      meal: "Lunch",
      items: ["Vegetable soup", "Crackers", "Tea"],
      calories: 280,
      nutrition: "Light",
    },
    {
      id: 6,
      date: "2024-01-14",
      time: "07:30 PM",
      meal: "Dinner",
      items: ["Pasta with marinara", "Side salad", "Garlic bread"],
      calories: 520,
      nutrition: "Good",
    },
  ];

  const performanceMetrics = {
    averageCalories: 395,
    mealsPerDay: 2.8,
    nutritionScore: 85,
    status: "Good",
  };

  const filteredMeals = mealLogs.filter((meal) => {
    if (dateFilter && !meal.date.includes(dateFilter)) return false;
    if (mealFilter !== "all" && meal.meal.toLowerCase() !== mealFilter)
      return false;
    return true;
  });

  const getEncouragementMessage = () => {
    const nutritionScore = performanceMetrics.nutritionScore;
    const mealsPerDay = performanceMetrics.mealsPerDay;

    if (nutritionScore >= 80 && mealsPerDay >= 3) {
      return "Excellent nutrition habits! You're maintaining a balanced diet with regular meals.";
    } else if (nutritionScore >= 70) {
      return "Good progress on your nutrition goals. Keep focusing on balanced meals throughout the day.";
    } else {
      return "Consider adding more variety to your meals and maintaining regular eating schedules for better nutrition.";
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
              Meal Tracking Logs
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
                    active: true,
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

        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {performanceMetrics.averageCalories}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Average Daily Calories
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {performanceMetrics.mealsPerDay}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Meals Per Day
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {performanceMetrics.nutritionScore}%
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Nutrition Score
              </div>
              <Progress
                value={performanceMetrics.nutritionScore}
                className="mt-2 [&>div]:bg-green-600"
              />
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
                  Filter by Meal Type
                </label>
                <Select value={mealFilter} onValueChange={setMealFilter}>
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Meals</SelectItem>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meals List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredMeals.map((meal) => (
            <Card
              key={meal.id}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="flex items-center gap-2 text-green-600 text-lg sm:text-xl">
                    <Utensils className="h-4 w-4 sm:h-5 sm:w-5" />
                    {meal.meal}
                  </CardTitle>
                  <Badge
                    className={`text-xs sm:text-sm self-start sm:self-auto ${
                      meal.nutrition === "Excellent"
                        ? "bg-green-600 text-white"
                        : meal.nutrition === "Good"
                        ? "bg-blue-600 text-white"
                        : meal.nutrition === "Balanced"
                        ? "bg-lime-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {meal.nutrition}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm font-medium">
                        {meal.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="text-xs sm:text-sm">{meal.time}</span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="font-medium">Calories: </span>
                      <span className="text-green-600 font-bold">
                        {meal.calories}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Food Items:
                    </div>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      {meal.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Encouragement Card */}
        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Utensils className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              <h3 className="text-base sm:text-lg font-serif text-green-600">
                Daily Encouragement
              </h3>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              {getEncouragementMessage()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
