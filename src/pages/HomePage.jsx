import React from 'react';
import AppLayout from '../layout/AppLayout';
import IncomeTransactions from '../components/IncomeTransactions';
import ExpenseTransactions from '../components/ExpenseTransactions';


const Home = () => {
    return (
        <AppLayout>
            <div>
                <div className="flex justify-center items-center h-screen">
                    <h1 className='text-4xl'>Welcome to the income-expense Tracker</h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;