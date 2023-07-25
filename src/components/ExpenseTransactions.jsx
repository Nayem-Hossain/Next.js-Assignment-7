import React, { useState } from 'react';
import AppLayout from '../layout/AppLayout';

const ExpenseTransactions = () => {
    const { expenseList, setExpenseList } = useState([]);

    const getTodaysDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${date}`;
        return formattedDate;
      }

      const getCurrentTime = () => {
        const now = new Date();
        const options = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'Asia/Dhaka',
        };
      
        const formattedTime = now.toLocaleString('en-BD', options);
        return formattedTime;
      }
const getExpenseRow=()=>{
  
}
    return (
        <AppLayout>
            <div>
                <form onSubmit={""}>
                    <div className="flex justify-center">
                        <input type="text" placeholder="Input your expense..." className="input input-bordered w-full max-w-xs" />
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
                                <th>Expense Amount</th>
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
                                <th>Total Expense</th>
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

export default ExpenseTransactions;