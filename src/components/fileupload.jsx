import React, { useState } from 'react';

export default function FileUpload({ inputName, labelText, multiple = false }) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles([...files]);
    };

    return (
        <div className="form-group mt-3 fileUploadContainer">
            <label htmlFor="">{labelText}</label>
            <input
                className="form-control"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                name={inputName}
                multiple={multiple}
            />
            {selectedFiles.length > 0 && (
                <div>
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="d-flex align-items-center mt-3">
                            <div className="img-preview">
                                <img src={URL.createObjectURL(file)} alt={`Preview Image ${index}`} />
                            </div>
                            <p className="ms-2">{file.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
