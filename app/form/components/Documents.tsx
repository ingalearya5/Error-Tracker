import React, { useRef, useState } from "react";

interface DocumentsProps {
  formData: {
    panDocument: File | null;
    addressProof: File | null;
    additionalDocument: File | null;
  };
  handleFileChange: (field: string, file: File | null) => void;
}

export const Documents: React.FC<DocumentsProps> = ({
  formData,
  handleFileChange,
}) => {
  const panRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const additionalRef = useRef<HTMLInputElement>(null);

  const documentTypes = [
    {
      name: "panDocument",
      label: "PAN Card",
      description: "Upload a clear scanned copy or photo of your PAN card",
      required: true,
      accept: ".pdf,.jpg,.jpeg,.png",
      value: formData.panDocument,
      ref: panRef,
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: "addressProof",
      label: "Address Proof",
      description: "Aadhaar Card, Passport, Utility Bill, or Bank Statement",
      required: true,
      accept: ".pdf,.jpg,.jpeg,.png",
      value: formData.addressProof,
      ref: addressRef,
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: "additionalDocument",
      label: "Additional Document",
      description: "Income proof, bank statement, or any other supporting document",
      required: false,
      accept: ".pdf,.jpg,.jpeg,.png",
      value: formData.additionalDocument,
      ref: additionalRef,
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const handleFileSelect = (field: string, file: File | null) => {
    handleFileChange(field, file);
  };

  const handleRemoveFile = (field: string) => {
    handleFileChange(field, null);
    // Reset the file input
    const refs: Record<string, React.RefObject<HTMLInputElement | null>> = {
      panDocument: panRef,
      addressProof: addressRef,
      additionalDocument: additionalRef,
    };
    if (refs[field]?.current) {
      refs[field].current.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Document Upload</h2>
        <p className="mt-1 text-sm text-gray-500">
          Upload the required documents for identity verification
        </p>
      </div>

      <div className="space-y-4">
        {documentTypes.map((doc) => (
          <div key={doc.name}>
            <div
              className={`relative rounded-lg border-2 border-dashed p-6 transition-all duration-200 ${
                doc.value
                  ? "border-green-300 bg-green-50/50"
                  : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`hidden sm:flex h-12 w-12 items-center justify-center rounded-lg ${
                    doc.value
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {doc.value ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    doc.icon
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {doc.label}
                    </h3>
                    {doc.required && (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        Required
                      </span>
                    )}
                    {!doc.required && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{doc.description}</p>
                  
                  {doc.value && (
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-3 py-2">
                        <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {doc.value.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(doc.value.size)}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(doc.name)}
                        className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {!doc.value && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      const refs: Record<string, React.RefObject<HTMLInputElement | null>> = {
                        panDocument: panRef,
                        addressProof: addressRef,
                        additionalDocument: additionalRef,
                      };
                      refs[doc.name]?.current?.click();
                    }}
                    className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Choose File
                  </button>
                </div>
              )}

              <input
                ref={
                  doc.name === "panDocument"
                    ? panRef
                    : doc.name === "addressProof"
                    ? addressRef
                    : additionalRef
                }
                type="file"
                accept={doc.accept}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  handleFileSelect(doc.name, file);
                }}
                className="hidden"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Upload Tips */}
      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
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
            <p className="font-medium">Document Upload Guidelines</p>
            <ul className="mt-2 space-y-1 text-blue-700 list-disc list-inside">
              <li>Accepted formats: PDF, JPG, JPEG, PNG</li>
              <li>Maximum file size: 5MB per document</li>
              <li>Ensure documents are clear and legible</li>
              <li>All required documents must be uploaded</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};