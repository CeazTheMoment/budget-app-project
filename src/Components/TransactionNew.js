import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionNew() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    date: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date"> Date</label>
        <input
          id="date"
          name="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          name="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          type="text"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          name="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
        />
        <input type="submit" value="CREATE NEW ITEM" className="button" />
      </form>
    </div>
  );
}

export default TransactionNew;
