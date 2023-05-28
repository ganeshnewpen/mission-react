import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function UseStateComponents() {
    const [isActive, setIsActive] = useState(false);
    const { register, handleSubmit } = useForm();

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const buttonClass = isActive ? 'btn btn-success' : 'btn btn-danger';

    const onSubmit = (data) => {
        console.log(data.username);
        alert(data.username);

        const file = data.file[0];
        alert(file.name);
    };

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
                                <div className="col-lg-6">
                                    <button className={buttonClass} onClick={toggleActive}>
                                        {isActive ? 'Active' : 'Inactive'}
                                    </button>
                                </div>
                                <div className="col-lg-6">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register('username')}
                                        />

                                        <input
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            {...register('file')}
                                        />

                                        <button className="btn btn-secondary mt-3" type="submit">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
