"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
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
    console.log("Profile saved:", profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Left */}
          <div className="flex flex-row sm:flex-row sm:items-center gap-4">
            <Link href="/" className="w-fit">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif text-secondary-blue">
                  Profile Information
                </h1>
                <p className="text-sm md:text-base text-alt-dark-gray">
                  Manage your personal details
                </p>
              </div>
              {/* <Image
                src="/images/betti-logo.png"
                alt="Betti Logo"
                width={45}
                height={45}
                className="rounded-full"
              /> */}
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-2 flex-wrap">
            {isEditing ? (
              <>
                <Button
                  onClick={handleSave}
                  className="bg-primary-green hover:bg-primary-green/90 text-white w-full sm:w-auto"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-secondary-blue hover:bg-secondary-blue/90 text-white w-full sm:w-auto"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            )}
          </div>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif text-lg md:text-xl">
                <User className="h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormItem
                label="Full Name"
                value={profileData.name}
                editing={isEditing}
                onChange={(val) =>
                  setProfileData({ ...profileData, name: val })
                }
              />
              <FormItem
                label="Date of Birth"
                value={
                  new Date(profileData.dateOfBirth).toISOString().split("T")[0]
                }
                editing={isEditing}
                type="date"
                onChange={(val) =>
                  setProfileData({ ...profileData, dateOfBirth: val })
                }
                displayValue={new Date(
                  profileData.dateOfBirth
                ).toLocaleDateString()}
              />
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-green font-serif text-lg md:text-xl">
                <Phone className="h-5 w-5" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormItem
                label="Phone Number"
                value={profileData.phone}
                editing={isEditing}
                onChange={(val) =>
                  setProfileData({ ...profileData, phone: val })
                }
              />
              <FormItem
                label="Email"
                value={profileData.email}
                editing={isEditing}
                type="email"
                onChange={(val) =>
                  setProfileData({ ...profileData, email: val })
                }
              />
            </CardContent>
          </Card>

          {/* Address */}
          <FullWidthCard
            icon={<MapPin className="h-5 w-5" />}
            title="Address"
            children={
              <FormItem
                label="Home Address"
                value={profileData.address}
                editing={isEditing}
                textarea
                onChange={(val) =>
                  setProfileData({ ...profileData, address: val })
                }
              />
            }
          />

          {/* Emergency Contacts */}
          <FullWidthCard
            icon={<Users className="h-5 w-5" />}
            title="Emergency Contacts"
            children={
              <div className="space-y-4">
                <FormItem
                  label="Primary Emergency Contact"
                  value={profileData.emergencyContact1}
                  editing={isEditing}
                  onChange={(val) =>
                    setProfileData({ ...profileData, emergencyContact1: val })
                  }
                />
                <FormItem
                  label="Secondary Emergency Contact"
                  value={profileData.emergencyContact2}
                  editing={isEditing}
                  onChange={(val) =>
                    setProfileData({ ...profileData, emergencyContact2: val })
                  }
                />
                <FormItem
                  label="Medical Emergency Contact"
                  value={profileData.emergencyContact3}
                  editing={isEditing}
                  onChange={(val) =>
                    setProfileData({ ...profileData, emergencyContact3: val })
                  }
                />
              </div>
            }
          />

          {/* Health Info */}
          <FullWidthCard
            icon={<Heart className="h-5 w-5" />}
            title="Health Information"
            children={
              <div className="space-y-4">
                <FormItem
                  label="Medical Conditions"
                  value={profileData.medicalConditions}
                  editing={isEditing}
                  textarea
                  onChange={(val) =>
                    setProfileData({ ...profileData, medicalConditions: val })
                  }
                />
                <FormItem
                  label="Allergies"
                  value={profileData.allergies}
                  editing={isEditing}
                  onChange={(val) =>
                    setProfileData({ ...profileData, allergies: val })
                  }
                />
                <FormItem
                  label="Medications"
                  value={profileData.medications}
                  editing={isEditing}
                  textarea
                  onChange={(val) =>
                    setProfileData({ ...profileData, medications: val })
                  }
                />
                <FormItem
                  label="Additional Notes"
                  value={profileData.notes}
                  editing={isEditing}
                  textarea
                  onChange={(val) =>
                    setProfileData({ ...profileData, notes: val })
                  }
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

/* --- Reusable Sub-Components --- */
function FormItem({
  label,
  value,
  editing,
  onChange,
  type = "text",
  textarea = false,
  displayValue,
}: {
  label: string;
  value: string;
  editing: boolean;
  onChange: (val: string) => void;
  type?: string;
  textarea?: boolean;
  displayValue?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {editing ? (
        textarea ? (
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1"
            rows={3}
          />
        ) : (
          <Input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1"
          />
        )
      ) : (
        <div className="mt-1 p-2 bg-alt-light-gray rounded break-words text-sm sm:text-base">
          {displayValue ?? value}
        </div>
      )}
    </div>
  );
}

function FullWidthCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="bg-white border-gray-200 shadow-sm md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary-green font-serif text-lg md:text-xl">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
