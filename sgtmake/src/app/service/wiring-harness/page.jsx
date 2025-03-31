"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function WiringHarnessForm() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    leftConnector: { housing: "", terminal: "", newConnector: "" },
    rightConnector: { housing: "", terminal: "", newConnector: "" },
    wire: { awg: "", length: "", color: "Black", twisted: false, customColor: "" },
    quantity: 1,
  });

  const handleFileUpload = (e) => setFile(e.target.files[0]);
  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSubmit = () => console.log("Form Data:", formData);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Wiring Harness</h1>

        {/* File Upload Section */}
        <div className="border border-gray-300 p-12 rounded-lg text-center bg-gray-100 mb-6">
          <input type="file" id="file" className="hidden" onChange={handleFileUpload} />
          <label htmlFor="file" className="cursor-pointer flex items-center justify-center bg-orange-100 px-4 py-2 rounded-md text-orange-600 text-sm">
            <Upload className="w-5 h-5 mr-2" /> Upload Your File
          </label>
          {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Get a Quote</button>

        {/* Cable Selection Form */}
        <h2 className="text-2xl my-6">Cable Selection</h2>
        <p className="text-slate-400 text-sm mt-3">Please fill in the part number according to your cable requirements. If you are not sure about the specific part number of the housing, Click here.</p>

        <ConnectorForm side="Left" formData={formData} setFormData={setFormData} />
        <WireForm formData={formData} setFormData={setFormData} />
        <ConnectorForm side="Right" formData={formData} setFormData={setFormData} />

        {/* Quantity Selection */}
        <h2 className="text-xl mt-6">Quantity</h2>
        <div className="flex items-center gap-4">
          <button onClick={() => setFormData((prev) => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}>-</button>
          <span>{formData.quantity}</span>
          <button onClick={() => setFormData((prev) => ({ ...prev, quantity: prev.quantity + 1 }))}>+</button>
        </div>

        {/* Submit Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-6" onClick={handleSubmit}>
          Confirm Cable Plan
        </button>
      </div>
    </>
  );
}

// Connector Form Component
function ConnectorForm({ side, formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [`${side.toLowerCase()}Connector`]: { ...prev[`${side.toLowerCase()}Connector`], [field]: value },
    }));
  };

  return (
    <div className="p-7 border rounded-xl mt-4 bg-[#FAFAFA]">
      <div className="flex items-center space-x-6">
        <span className="font-semibold text-lg">{side} Connector</span>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Housing Part</label>
          <select className="border rounded-md px-3 py-2 w-48" onChange={(e) => handleChange("housing", e.target.value)}>
            <option value="">Select</option>
            <option value="H1">H1</option>
            <option value="H2">H2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Terminal Part Number</label>
          <select className="border rounded-md px-3 py-2 w-48" onChange={(e) => handleChange("terminal", e.target.value)}>
            <option value="">Select</option>
            <option value="T1">T1</option>
            <option value="T2">T2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Add New Connector</label>
          <input
            type="text"
            placeholder="New Connector"
            className="border rounded-md px-3 py-2 w-48"
            onChange={(e) => handleChange("newConnector", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// Wire Form Component
function WireForm({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      wire: { ...prev.wire, [field]: value },
    }));
  };

  return (
    <div className="p-4 border rounded-xl mt-4 bg-[#FAFAFA]">
      <div className="flex flex-col">
        <span className="font-semibold text-lg mb-4">Wire</span>

        <div className="flex items-center space-x-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium">AWG</label>
            <select className="border rounded-md px-3 py-2 w-48" onChange={(e) => handleChange("awg", e.target.value)}>
              <option value="">Select</option>
              <option value="18">18</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Length</label>
            <input type="number" className="border rounded-md px-3 py-2 w-48" onChange={(e) => handleChange("length", e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Twisted</label>
            <select className="border rounded-md px-3 py-2 w-48" onChange={(e) => handleChange("twisted", e.target.value === "true")}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium">Customize Color</label>
          <input type="text" className="border rounded-md px-3 py-2 w-48" placeholder="Enter Color" onChange={(e) => handleChange("customColor", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
