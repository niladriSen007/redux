// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrementBonus, incrementBonus } from "../slices/bonusSlice";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const { data, isLoading } = useGetUserByIdQuery(2);
  console.log(data?.amount);

  const [addAcccount, response] = useAddAccountMutation();
  // console.log(response);

  //Get all Users
  const { data: userData, isLoading: userLoading } = useGetAllUsersQuery();
  // console.log(userData);

  const [deleteAcccount, deleteResponse] = useDeleteAccountMutation();

  const [updateAcccount , updateResponse] = useUpdateAccountMutation();
  // console.log(updateAcccount)


  // console.log(updateResponse)

  return (
    <div className="card">
      <div className="container">
        {/* <h4>
          <b>Admin Component</b>
          {isLoading ? <h2>Loading ... </h2> : <h2>{data?.amount}</h2>}
        </h4> */}
        <h4>
          <b>All Users</b>
          {userLoading ? (
            <h2>Loading ... </h2>
          ) : (
            <h2>
              {userData?.map((user) => (
                <div style={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center"}}>
                  <h4 key={user.id}>{user.amount}</h4>
                  <button onClick={() => updateAcccount({id:user.id,amount:8007})}>Update User</button>
                  <button onClick={() => deleteAcccount(user.id)}>Delete User</button>
                </div>
              ))}
            </h2>
          )}
        </h4>
        <button onClick={() => addAcccount(7001, 1)}>Add New User</button>
      </div>
    </div>
  );
}

export default Admin;
