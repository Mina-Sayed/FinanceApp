import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const CreateSavingGoal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    // Fetch the CSRF token and set it in the default headers
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('/api/csrf-cookie/');
        console.log('CSRF token set');
      } catch (error) {
        console.error('Failed to set CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const goalData = {
      title,
      description,
      amount,
      deadline,
    };

    axios
      .post('http://localhost:8000/api/saving-goals/', goalData)
      .then((response) => {
        console.log(response.data);
        // Reset form fields
        setTitle('');
        setDescription('');
        setAmount('');
        setDeadline('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <FormContainer>
      <h1>Create Saving Goal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Title:</Label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <Label>Description:</Label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <Label>Amount:</Label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
          <Label>Deadline:</Label>
          <input
            type="date"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </FormContainer>
  );
};

export default CreateSavingGoal;
