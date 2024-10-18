'use client';

import { useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close Modal' : 'Open Modal'}
            </button>
            {isOpen && (
                <div className="modal">
                    <h2>This is a modal!</h2>
                    <p>You can put any content here.</p>
                </div>
            )}
        </div>
    );
}
