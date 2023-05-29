import React, { useState } from 'react';

export default function FileUpload({ inputName, labelText }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="form-group mt-3 fileUploadContainer">
            <label htmlFor="">{labelText}</label>
            <input
                className="form-control"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                name={inputName} // Use the inputName prop as the file input name
            />
            {selectedFile && (
                <div className="d-flex align-items-center mt-3">
                    <div className="img-preview">
                        <img src={URL.createObjectURL(selectedFile)} alt="Preview" />
                    </div>
                    <p className="ms-2">{selectedFile.name}</p>
                </div>
            )}
        </div>
    );
}
