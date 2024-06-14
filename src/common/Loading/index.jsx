import React from 'react';
import { useLoading } from 'admin/contexts/AdminProvider';
import './styles.scss'; // Import CSS cho loading

const Loading = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                Loading...
            </div>
        </div>
    );
};

export default Loading;
