// app/page.tsx or wherever your main page is
"use client";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ContactDetails } from "./components/ContactDetails";
import { Documents } from "./components/Documents";
import { FinancialInfo } from "./components/FinancialInfo";
import { PersonalDetails } from "./components/PersonalDetails";
import { Review } from "./components/Review";

const TOTAL_STEPS = 5;

interface FormDataType {
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
}

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    personalDetails: {
      fullName: "",
      dob: "",
      gender: "",
      nationality: "",
      country: "",
    },
    contactDetails: {
      email: "",
      phone: "",
      pan: "",
      aadhaar: "",
      taxCountry: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
    },
    financialDetails: {
      employmentStatus: "",
      annualIncome: "",
      sourceOfFunds: "",
      accountPurpose: "",
    },
    documents: {
      panDocument: null,
      addressProof: null,
      additionalDocument: null,
    },
  });

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const handlePersonalDetailsChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [field]: value,
      },
    }));
  };

  const handleContactDetailsChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      contactDetails: {
        ...prev.contactDetails,
        [field]: value,
      },
    }));
  };

  const handleFinancialDetailsChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      financialDetails: {
        ...prev.financialDetails,
        [field]: value,
      },
    }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file,
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Submitted Data:", formData);
    setIsSubmitting(false);
    
    // You can add success notification or redirect here
    alert("Application submitted successfully!");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails
            formData={formData.personalDetails}
            handleChange={handlePersonalDetailsChange}
          />
        );
      case 2:
        return (
          <ContactDetails
            formData={formData.contactDetails}
            handleChange={handleContactDetailsChange}
          />
        );
      case 3:
        return (
          <FinancialInfo
            formData={formData.financialDetails}
            handleChange={handleFinancialDetailsChange}
          />
        );
      case 4:
        return (
          <Documents
            formData={formData.documents}
            handleFileChange={handleFileChange}
          />
        );
      case 5:
        return <Review formData={formData} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  const steps = [
    { number: 1, label: "Personal" },
    { number: 2, label: "Contact" },
    { number: 3, label: "Financial" },
    { number: 4, label: "Documents" },
    { number: 5, label: "Review" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Account Application
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Complete all steps to submit your application
            </p>
          </div>

          {/* Step Indicators */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                        currentStep === step.number
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110"
                          : currentStep > step.number
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium hidden sm:block ${
                        currentStep === step.number
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 w-12 sm:w-24 transition-all duration-300 ${
                        currentStep > step.number
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-sm font-medium">
              <span className="text-gray-600">
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span className="text-blue-600">{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-100/50 sm:p-8">
            <div className="animate-fadeIn">{renderStep()}</div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={previousStep}
              disabled={currentStep === 1}
              className="group flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            {currentStep < TOTAL_STEPS ? (
              <button
                onClick={nextStep}
                className="group flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-300"
              >
                Next
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-200 transition-all duration-300 hover:bg-green-700 hover:shadow-green-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Page;