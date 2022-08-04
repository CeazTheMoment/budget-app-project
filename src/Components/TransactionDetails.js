import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <article>
      <p>Date: {transaction.date}</p>
      <p>Name: {transaction.item_name}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>From: {transaction.from}</p>
      <p>Category: {transaction.category}</p>
      <div className="showNav">
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default TransactionDetails;
