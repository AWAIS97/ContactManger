/** @format */

import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    const newUser = {
      id: uuid(),
      name,
      email,
      phone,
      timestamp,
    };
    addUser(newUser);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          placeholder='Enter user'
          required
        ></Input>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder='Enter email'
          required
        ></Input>
        <Input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name='phone'
          placeholder='Enter phone'
          required
        ></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};
