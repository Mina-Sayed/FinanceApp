import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const GoalList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const GoalItem = styled.li`
  margin-bottom: 10px;
`;

const NewGoalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const HomePage = () => {
  const [savingGoals, setSavingGoals] = useState([]);

  useEffect(() => {
    const fetchSavingGoals = async () => {
      try {
        const response = await axios.get('/api/saving-goals');
        setSavingGoals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavingGoals();
  }, []);

  return (
    <Container>
      <h1>Home Page</h1>
      <h2>Saving Goals:</h2>
      <GoalList>
        {savingGoals.map((goal) => (
          <GoalItem key={goal.id}>
            {goal.title} - Target Amount: ${goal.target_amount}
          </GoalItem>
        ))}
      </GoalList>
      <NewGoalButton>
        <Link to="/create-saving-goal">Create New Goal</Link>
      </NewGoalButton>
    </Container>
  );
};

export default HomePage;
