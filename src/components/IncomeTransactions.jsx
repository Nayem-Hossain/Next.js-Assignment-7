import React from 'react';
import AppLayout from '../layout/AppLayout';

const IncomeTransactions = () => {
    return (
        <AppLayout>
            <div>
                <form action="">
                    <div className="flex justify-center">
                        <input type="text" placeholder="Input your income..." className="input input-bordered w-full max-w-xs" />
                        <button className="btn btn-accent">Submit</button>
                    </div>
                </form>

                <div className="overflow-x-auto mt-10">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>date</th>
                                <th>Input Time</th>
                                <th>Income Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{1}</th>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Income</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </AppLayout>
    );
};

export default IncomeTransactions;