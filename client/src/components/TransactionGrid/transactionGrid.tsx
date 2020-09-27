import React from "react";
import { Transaction } from '../../types/merchant/merchant'

interface TransactionProps {
    transactions: Transaction[];
  }

const TransactionGrid = ({ transactions }: TransactionProps) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Description</th>
                <th>CC Last Four"</th>
                <th>CC Expiry</th>
                <th>CC Token</th>
                <th>Customer ID</th>
                <th>Date</th>
            </tr>
            {transactions.map((transaction) => (
                <tr>
                    <td>{transaction.id}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.ccLastFour}</td>
                    <td>{transaction.ccExpiry}</td>
                    <td>{transaction.ccToken}</td>
                    <td>{transaction.customerId}</td>
                    <td>{transaction.date}</td>
                </tr>
            ))}
        </table>
    );
}

export default TransactionGrid;