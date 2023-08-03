import React from 'react';
import MainLayout from '../layout/MainLayout';
import FunFact from '../components/FunFact';

const FunFactPage = (props) => {
    return (
        <>
            <MainLayout>
                <FunFact />
            </MainLayout>
        </>
    );
}

export default FunFactPage;