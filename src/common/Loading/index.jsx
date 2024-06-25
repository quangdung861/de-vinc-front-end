import React from 'react';
import { useLoading } from 'admin/contexts/AdminProvider';
import './styles.scss';

const spinner = {
    fontSize: "30px",
    color: "#007bff",
    marginBottom: "24px",
};

const Loading = () => {
    const { isLoading } = useLoading();
    console.log("🚀 ~ Loading ~ isLoading:", isLoading)

    if (!isLoading) return null;

    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                <i className="fas fa-spinner fa-spin spinner" style={spinner}></i>
            </div>
        </div>
    );
};

export default Loading;
