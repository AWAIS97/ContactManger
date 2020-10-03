/** @format */

import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

export const Contact = (props) => {
  const { users } = useContext(GlobalContext);

  const currentUserId = props.match.params.id;
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Added time</th>
        </tr>
      </thead>

      <>
        <tbody>
          <tr>
            <td>{selectedUser.name}</td>
            <td>{selectedUser.email}</td>
            <td>{selectedUser.phone}</td>
            <td> {new Date(selectedUser.timestamp).toUTCString()}</td>
          </tr>
          <Link className='btn btn-primary' to='/'>
            Back
          </Link>
        </tbody>
      </>
    </Table>
  );
};
