/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

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
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <tbody>
              <tr>
                <td>
                  <Link to={`/contact/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td> {new Date(user.timestamp).toUTCString()}</td>
                <td>
                  {" "}
                  <div className='ml-auto'>
                    <Link
                      to={`/edit/${user.id}`}
                      color='warning'
                      className='btn btn-warning mr-1'
                    >
                      Edit
                    </Link>
                    <Button onClick={() => removeUser(user.id)} color='danger'>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </>
      ) : (
        <h4 className='text-center'>No Users</h4>
      )}
    </Table>
  );
};
