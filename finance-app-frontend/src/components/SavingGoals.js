import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SavingGoals = () => {
  const { id } = useParams();
  const [savingGoal, setSavingGoal] = useState(null);

  useEffect(() => {
    const fetchSavingGoal = async () => {
      try {
        const response = await axios.get(`/api/saving-goals/${id}`);
        setSavingGoal(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavingGoal();
  }, [id]);

  if (!savingGoal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{savingGoal.title}</h2>
      <p>Description: {savingGoal.description}</p>
      <p>Target Amount: ${savingGoal.target_amount}</p>
      <p>Current Amount: ${savingGoal.current_amount}</p>
    </div>
  );
};

export default SavingGoals;
