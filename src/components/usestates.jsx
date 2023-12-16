import React, { useState } from 'react';
import FileUpload from './fileupload.jsx'
import QuantityInput from './quantityinput.jsx';
import Slider from './slider.jsx';

export default function UseStateComponents() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const buttonClass = isActive ? 'btn btn-success' : 'btn btn-danger';


    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>UseStates</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <button className={buttonClass} onClick={toggleActive}>
                                        {isActive ? 'Active' : 'Inactive'}
                                    </button>
                                </div>

                                <div className="col-lg-4">
                                    <QuantityInput inputName="quantity" />
                                </div>
                                <div className="col-lg-4">
                                    <FileUpload inputName="file" labelText="Upload your file" />
                                </div>
                                <div className="col-lg-4">
                                    <FileUpload inputName="images" labelText="Upload your file (multiple)" multiple={true} />
                                </div>
                                <div className="col-lg-12">
                                    <hr />
                                    <Slider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

