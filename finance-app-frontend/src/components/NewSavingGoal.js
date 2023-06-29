// NewSavingGoal.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const NewSavingGoal = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');

  const handleAmountChange = (event) => {
    const amount = event.target.value;
    setTotalAmount(amount);

    // Calculate monthly deposit
    if (targetDate && amount) {
      const totalMonths = calculateTotalMonths(targetDate);
      const deposit = totalMonths > 0 ? amount / totalMonths : 0;
      setMonthlyDeposit(deposit.toFixed(2));
    }
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setTargetDate(date);

    // Calculate monthly deposit
    if (totalAmount && date) {
      const totalMonths = calculateTotalMonths(date);
      const deposit = totalMonths > 0 ? totalAmount / totalMonths : 0;
      setMonthlyDeposit(deposit.toFixed(2));
    }
  };

  const calculateTotalMonths = (date) => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const months = (targetDate.getFullYear() - currentDate.getFullYear()) * 12;
    return months + (targetDate.getMonth() - currentDate.getMonth());
  };

  return (
    <Container>
      <h1>Create New Saving Goal</h1>
      <Form>
        <InputGroup>
          <Label>Total Amount:</Label>
          <Input
            type="number"
            value={totalAmount}
            onChange={handleAmountChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Target Date:</Label>
          <Input
            type="date"
            value={targetDate}
            onChange={handleDateChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Monthly Deposit:</Label>
          <Input
            type="text"
            value={monthlyDeposit}
            readOnly
          />
        </InputGroup>
        <Button type="submit">Create Goal</Button>
      </Form>
    </Container>
  );
};

export default NewSavingGoal;
