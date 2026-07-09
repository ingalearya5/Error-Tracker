// components/PersonalDetails.tsx
import React from "react";

interface PersonalDetailsProps {
  formData: {
    fullName: string;
    dob: string;
    gender: string;
    nationality: string;
    country: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
        <p className="mt-1 text-sm text-gray-500">
          Please provide your personal information
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nationality
          </label>
          <input
            type="text"
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            placeholder="e.g., Indian"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Residential Country
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="e.g., India"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
};