import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function QuantityInput({ inputName }) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    return (
        <div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    className="form-control"
                    name={inputName}
                    id="quantity"
                    value={quantity}
                    min={1}
                    readOnly
                />

                <div className="quantity-control mt-2">
                    <button
                        className="btn btn-sm btn-secondary me-3"
                        type='button'
                        onClick={increment}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button
                        type='button'
                        className="btn btn-sm btn-secondary"
                        onClick={decrement}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
            </div>
        </div>
    );
}
