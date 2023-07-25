import React, { useState } from 'react';
import AppLayout from '../layout/AppLayout';

const IncomeTransactions = () => {

    const [inputAmount, setInputAmount] = useState('');
    const [tableRowList, setTableRowList] = useState([]);

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
    const generateTableRow = () => {
        const nextID = tableRowList.length === 0 ? 1 : tableRowList[tableRowList.length - 1].sl + 1;
        tableRowList.push({
            sl: nextID,
            date: getTodaysDate(),
            inputTime: getCurrentTime(),
            expenseAmount: inputAmount,
        });

        setTableRowList([...tableRowList]);
        setInputAmount('');
    }
    return (
        <AppLayout>
            <div>

                <div className="flex justify-center">
                    <input onChange={(e) => setInputAmount(e.target.value)} value={inputAmount} type="text" placeholder="Input your income..." className="input input-bordered w-full max-w-xs" />
                    <button onClick={generateTableRow} className="btn btn-accent">Submit</button>
                </div>


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
                            {
                                tableRowList.length !== 0 ? (
                                    tableRowList.map((item, index) => {
                                        return (
                                            <tr>
                                                <th>{item.sl}</th>
                                                <td>{item.date}</td>
                                                <td>{item.inputTime}</td>
                                                <td>{item.expenseAmount}</td>
                                            </tr>
                                        );
                                    })
                                ) : (<></>)
                            }
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