import React from 'react';
import MainLayout from '../layout/MainLayout';

const NotFoundPage = (props) => {
    return (
        <>
            <MainLayout>
                <h1>404 - Not Found</h1>
                <p>The page could not be found.</p>
            </MainLayout>
        </>
    );
}

export default NotFoundPage;