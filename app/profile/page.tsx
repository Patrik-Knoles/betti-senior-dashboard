"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Phone,
  MapPin,
  Users,
  Heart,
  ArrowLeft,
  Edit,
  Save,
  X,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Margaret Johnson",
    dateOfBirth: "1945-03-15",
    phone: "(555) 123-4567",
    email: "margaret.johnson@email.com",
    address: "123 Oak Street, Springfield, IL 62701",
    emergencyContact1: "Sarah Johnson (Daughter) - (555) 987-6543",
    emergencyContact2: "Michael Johnson (Son) - (555) 456-7890",
    emergencyContact3: "Dr. Smith (Primary Care) - (555) 234-5678",
    medicalConditions: "Hypertension, Type 2 Diabetes",
    allergies: "Penicillin, Shellfish",
    medications: "Metformin 500mg twice daily, Lisinopril 10mg once daily",
    notes: "Prefers morning appointments. Uses walker for mobility assistance.",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a database
    console.log("Profile saved:", profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data if needed
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
                  Profile Information
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  Manage your personal details
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {isEditing ? (
              <>
                <Button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base order-2 sm:order-1"
                >
                  <Save className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Save Changes
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="text-sm sm:text-base order-1 sm:order-2"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
              >
                <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Basic Information Card */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Full Name
                </Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.name}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="dob"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Date of Birth
                </Label>
                {isEditing ? (
                  <Input
                    id="dob"
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        dateOfBirth: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {new Date(profileData.dateOfBirth).toLocaleDateString()}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact Details Card */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Phone Number
                </Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.phone}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Email Address
                </Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.email}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Address Card - Full Width */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label
                  htmlFor="address"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Home Address
                </Label>
                {isEditing ? (
                  <Textarea
                    id="address"
                    value={profileData.address}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        address: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2 resize-none"
                    rows={2}
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.address}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts Card - Full Width */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="emergency1"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Primary Emergency Contact
                </Label>
                {isEditing ? (
                  <Input
                    id="emergency1"
                    value={profileData.emergencyContact1}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        emergencyContact1: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.emergencyContact1}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="emergency2"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Secondary Emergency Contact
                </Label>
                {isEditing ? (
                  <Input
                    id="emergency2"
                    value={profileData.emergencyContact2}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        emergencyContact2: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.emergencyContact2}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="emergency3"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Medical Emergency Contact
                </Label>
                {isEditing ? (
                  <Input
                    id="emergency3"
                    value={profileData.emergencyContact3}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        emergencyContact3: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.emergencyContact3}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Health Information Card - Full Width */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-green-600 font-serif text-lg sm:text-xl">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                Health Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label
                  htmlFor="conditions"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Medical Conditions
                </Label>
                {isEditing ? (
                  <Textarea
                    id="conditions"
                    value={profileData.medicalConditions}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        medicalConditions: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2 resize-none"
                    rows={2}
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.medicalConditions}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="allergies"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Allergies
                </Label>
                {isEditing ? (
                  <Input
                    id="allergies"
                    value={profileData.allergies}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        allergies: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2"
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.allergies}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="medications"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Current Medications
                </Label>
                {isEditing ? (
                  <Textarea
                    id="medications"
                    value={profileData.medications}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        medications: e.target.value,
                      })
                    }
                    className="mt-1 sm:mt-2 resize-none"
                    rows={2}
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.medications}
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="notes"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Additional Notes
                </Label>
                {isEditing ? (
                  <Textarea
                    id="notes"
                    value={profileData.notes}
                    onChange={(e) =>
                      setProfileData({ ...profileData, notes: e.target.value })
                    }
                    className="mt-1 sm:mt-2 resize-none"
                    rows={3}
                  />
                ) : (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-100 rounded text-sm sm:text-base text-gray-700">
                    {profileData.notes}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs sm:text-sm text-gray-500 pt-4">
          Keep your profile information up to date for emergency situations
        </div>
      </div>
    </div>
  );
}
