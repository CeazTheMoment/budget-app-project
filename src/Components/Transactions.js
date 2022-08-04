import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";
const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, []);

  let total = transactions.reduce(
    (a, transaction) => a + parseInt(transaction.amount),
    0
  );
  // stackoverflow, format $ monetary values

  let dollarAmount = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="Transactions">
      <section>
        <h1>Account Total: {dollarAmount.format(total)}</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name of Transaction</th>
              <th>Amount of Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
