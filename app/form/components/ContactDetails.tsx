import React from "react";

interface ContactDetailsProps {
  formData: {
    email: string;
    phone: string;
    pan: string;
    aadhaar: string;
    taxCountry: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Contact & Identity Details
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Provide your contact information and identity documents
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mobile Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* PAN Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            PAN Number
          </label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={(e) => handleChange("pan", e.target.value.toUpperCase())}
            placeholder="ABCDE1234F"
            maxLength={10}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 uppercase transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* Aadhaar Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Aadhaar Number
          </label>
          <input
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={(e) => handleChange("aadhaar", e.target.value)}
            placeholder="1234 5678 9012"
            maxLength={12}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* Tax Residency Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Tax Residency Country
          </label>
          <input
            type="text"
            name="taxCountry"
            value={formData.taxCountry}
            onChange={(e) => handleChange("taxCountry", e.target.value)}
            placeholder="e.g., India"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* Postal Code - moved up for better layout flow */}
        <div className="sm:col-start-1">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            placeholder="400001"
            maxLength={6}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* Address - Full width */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Enter your complete address"
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 resize-none"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="e.g., Mumbai"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="e.g., Maharashtra"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
};