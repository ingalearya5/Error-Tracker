import React from "react";

interface FinancialInfoProps {
  formData: {
    employmentStatus: string;
    annualIncome: string;
    sourceOfFunds: string;
    accountPurpose: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const FinancialInfo: React.FC<FinancialInfoProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Financial Information
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Tell us about your financial background and requirements
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Employment Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Employment Status
          </label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={(e) => handleChange("employmentStatus", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 bg-white"
          >
            <option value="">Select employment status</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self Employed</option>
            <option value="student">Student</option>
            <option value="retired">Retired</option>
          </select>
        </div>

        {/* Annual Income Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Annual Income Range
          </label>
          <select
            name="annualIncome"
            value={formData.annualIncome}
            onChange={(e) => handleChange("annualIncome", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 bg-white"
          >
            <option value="">Select income range</option>
            <option value="0-5">₹0 - ₹5 Lakhs</option>
            <option value="5-10">₹5 - ₹10 Lakhs</option>
            <option value="10-25">₹10 - ₹25 Lakhs</option>
            <option value="25+">₹25 Lakhs+</option>
          </select>
        </div>

        {/* Source of Funds */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Source of Funds
          </label>
          <select
            name="sourceOfFunds"
            value={formData.sourceOfFunds}
            onChange={(e) => handleChange("sourceOfFunds", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 bg-white"
          >
            <option value="">Select source of funds</option>
            <option value="salary">Salary</option>
            <option value="business">Business Income</option>
            <option value="investments">Investments</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Purpose of Account */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Purpose of Account
          </label>
          <select
            name="accountPurpose"
            value={formData.accountPurpose}
            onChange={(e) => handleChange("accountPurpose", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 bg-white"
          >
            <option value="">Select account purpose</option>
            <option value="savings">Savings</option>
            <option value="investing">Investing</option>
            <option value="payments">Payments</option>
            <option value="business">Business Use</option>
          </select>
        </div>
      </div>

      {/* Additional Information Card */}
      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <svg
            className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Why we need this information</p>
            <p className="mt-1 text-blue-700">
              This information helps us comply with regulatory requirements and
              provide you with appropriate financial services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};