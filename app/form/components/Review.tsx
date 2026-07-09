import React, { useState } from "react";

interface ReviewProps {
  formData: {
    personalDetails: {
      fullName: string;
      dob: string;
      gender: string;
      nationality: string;
      country: string;
    };
    contactDetails: {
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
    financialDetails: {
      employmentStatus: string;
      annualIncome: string;
      sourceOfFunds: string;
      accountPurpose: string;
    };
    documents: {
      panDocument: File | null;
      addressProof: File | null;
      additionalDocument: File | null;
    };
  };
  onSubmit: () => void;
}

export const Review: React.FC<ReviewProps> = ({ formData, onSubmit }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "personal",
      title: "Personal Details",
      data: formData.personalDetails,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "contact",
      title: "Contact & Identity Details",
      data: formData.contactDetails,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "financial",
      title: "Financial Information",
      data: formData.financialDetails,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "documents",
      title: "Documents",
      data: formData.documents,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const formatLabel = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const formatValue = (value: any): string => {
    if (value === null || value === undefined || value === "") {
      return "Not provided";
    }
    if (value instanceof File) {
      return value.name;
    }
    if (typeof value === "string") {
      // Format special fields
      if (value.includes("lakh") || value.includes("Lakh")) {
        return value;
      }
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return String(value);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>
        <p className="mt-1 text-sm text-gray-500">
          Please review your application before submitting
        </p>
      </div>

      {/* Progress Summary */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-green-900">All sections completed</p>
            <p className="text-sm text-green-700">
              You've completed all 4 sections of the application
            </p>
          </div>
        </div>
      </div>

      {/* Review Sections */}
      <div className="space-y-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className="rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:border-gray-300"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-600">{section.icon}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {Object.values(section.data).filter(v => v !== null && v !== "" && v !== undefined).length} of{" "}
                    {Object.keys(section.data).length} fields completed
                  </p>
                </div>
              </div>
              <svg
                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                  expandedSection === section.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSection === section.id && (
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {Object.entries(section.data).map(([key, value]) => (
                    <div
                      key={key}
                      className={`rounded-lg p-3 ${
                        value !== null && value !== "" && value !== undefined
                          ? "bg-white border border-gray-200"
                          : "bg-yellow-50 border border-yellow-200"
                      }`}
                    >
                      <dt className="text-xs font-medium uppercase text-gray-500 mb-1">
                        {formatLabel(key)}
                      </dt>
                      <dd
                        className={`font-medium ${
                          value !== null && value !== "" && value !== undefined
                            ? "text-gray-900"
                            : "text-yellow-600 italic"
                        }`}
                      >
                        {formatValue(value)}
                      </dd>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    // You can add edit functionality here
                    // This would navigate back to the specific step
                  }}
                  className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Edit this section →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation Checkbox */}
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isConfirmed}
            onChange={(e) => setIsConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <div>
            <span className="text-sm font-medium text-gray-900">
              Declaration
            </span>
            <p className="mt-1 text-sm text-gray-700">
              I confirm that all the information provided is true, accurate, and 
              complete. I understand that providing false or misleading information 
              may result in the rejection of my application and/or legal consequences.
            </p>
          </div>
        </label>
      </div>

    </div>
  );
};