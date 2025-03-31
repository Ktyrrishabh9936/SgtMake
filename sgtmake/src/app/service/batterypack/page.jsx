'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function BatteryPackForm() {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        chemistry: '',
        cellBrand: '',
        seriesConfig: '',
        parallelConfig: '',
        normalDischarge: '',
        peakDischarge: '',
        charging: '',
        lifeCycle: '',
        packVoltage: '',
        bmsChoice: '',
        modulusCount: '',
        dimensions: { H: '', W: '', L: '' },
        additionalInfo: ''
    });

    const handleFileUpload = (e) => setFile(e.target.files[0]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleDimensionChange = (e, dim) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            dimensions: { ...prev.dimensions, [dim]: value }
        }));
    };

    const handleSubmit = () => {
        const collectedData = { ...formData, file };
        console.log('Submitted Data:', collectedData);
    };

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Battery Packs Inquiry</h1>
                
                {/* File Upload */}
                <div className="border border-gray-300 p-12 rounded-lg text-center bg-gray-100 mb-6">
                    <input type="file" id="file" className="hidden" onChange={handleFileUpload} />
                    <label htmlFor="file" className="cursor-pointer flex items-center justify-center bg-orange-100 px-4 py-2 rounded-md text-orange-600 text-sm">
                        <Upload className="w-5 h-5 mr-2" /> Upload Your File
                    </label>
                    {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Chemistry</label>
                        <div className="flex gap-2 mt-1">
                            {['NCM', 'NCA', 'LifePO4', 'LIPO'].map((type) => (
                                <button 
                                    key={type} 
                                    className={`px-3 py-1 border rounded-md text-sm ${formData.chemistry === type ? 'bg-orange-500 text-white' : ''}`}
                                    onClick={() => setFormData(prev => ({ ...prev, chemistry: type }))}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium">Cell Brand</label>
                        <input name="cellBrand" type="text" className="w-full border p-2 rounded-md mt-1" placeholder="Write here" onChange={handleChange} />
                    </div>
                    
                    {['seriesConfig', 'parallelConfig', 'normalDischarge', 'peakDischarge', 'charging', 'lifeCycle', 'packVoltage', 'bmsChoice', 'modulusCount'].map((field, index) => (
                        <div key={index}>
                            <label className="block font-medium">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                            <input name={field} type="text" className="w-full border p-2 rounded-md mt-1" placeholder="Write here" onChange={handleChange} />
                        </div>
                    ))}
                    
                    <div>
                        <label className="block font-medium">Dimensions (mm)</label>
                        <div className="flex gap-2 mt-1">
                            {['H', 'W', 'L'].map((dim) => (
                                <input key={dim} type="text" className="w-1/3 border p-2 rounded-md" placeholder={dim} onChange={(e) => handleDimensionChange(e, dim)} />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-4">
                    <label className="block font-medium">Additional Information</label>
                    <textarea name="additionalInfo" className="w-full border p-2 rounded-md mt-1" placeholder="Write here" rows="3" onChange={handleChange}></textarea>
                </div>
                
                <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}