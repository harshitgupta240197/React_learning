// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function Axios() {
//   const [apidata, setApidata] = useState([]);

//   useEffect(() => {
//     axios.get("https://reqres.in/api/users?page=2").then((resp) => {
//       console.log(resp.data.data);
//       setApidata(resp.data.data);
//     });
//   }, []);

//   //   TASk - iterate apidata here..
//   // eg-
//   // 1. Michael lawsom has email id "michael.lawson@reqres.in"

//   return (
//     <div>
//       <h1>This is Axios</h1>
//       <table id="customers">
//         <thead>
//           <tr>
//             <th>Sno.</th>
//             <th>Avatar</th>
//             <th>UserName</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {apidata.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   src={user.avatar}
//                   alt={`${user.first_name} ${user.last_name}`}
//                 />
//               </td>
//               <td>
//                 {user.first_name},{user.last_name}
//               </td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   //   return (
//   //     <div>
//   //       {apidata.map((user, i) => (
//   //         <p key={user.id}>
//   //           {i + 1}. {user.first_name} {user.last_name} has email id {user.email}
//   //         </p>
//   //       ))}
//   //     </div>
//   //   );
// }




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './axios.css';

// export default function Axios() {
//   const [apidata, setApidata] = useState([]);
//   const [editingUser, setEditingUser] = useState(null);
//   const [newUser, setNewUser] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     avatar: ""
//   });

//   useEffect(() => {
//     axios.get("https://reqres.in/api/users?page=2").then((resp) => {
//       setApidata(resp.data.data);
//     });
//   }, []);

//   const handleDelete = (id) => {
//     setApidata(apidata.filter(user => user.id !== id));
//   };

//   const handleEdit = (user) => {
//     setEditingUser({ ...user });
//   };

//   const handleSave = () => {
//     setApidata(apidata.map(user => user.id === editingUser.id ? editingUser : user));
//     setEditingUser(null);
//   };

//   const handleAdd = () => {
//     setApidata([...apidata, { ...newUser, id: apidata.length + 1 }]);
//     setNewUser({ first_name: "", last_name: "", email: "", avatar: "" });
//   };

//   const handleChange = (e, user, setUser) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   return (
//     <div className="container mt-5">
//       <h1>This is Axios</h1>
//       <table className="table table-bordered table-striped">
//         <thead>
//           <tr>
//             <th>Sno.</th>
//             <th>Avatar</th>
//             <th>UserName</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {apidata.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   src={user.avatar}
//                   alt={`${user.first_name} ${user.last_name}`}
//                   className="img-thumbnail"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//               </td>
//               <td>
//                 {editingUser && editingUser.id === user.id ? (
//                   <input
//                     type="text"
//                     name="first_name"
//                     value={editingUser.first_name}
//                     onChange={(e) => handleChange(e, editingUser, setEditingUser)}
//                     className="form-control"
//                   />
//                 ) : (
//                   user.first_name
//                 )}
//                 {editingUser && editingUser.id === user.id ? (
//                   <input
//                     type="text"
//                     name="last_name"
//                     value={editingUser.last_name}
//                     onChange={(e) => handleChange(e, editingUser, setEditingUser)}
//                     className="form-control mt-1"
//                   />
//                 ) : (
//                   ` ${user.last_name}`
//                 )}
//               </td>
//               <td>
//                 {editingUser && editingUser.id === user.id ? (
//                   <input
//                     type="email"
//                     name="email"
//                     value={editingUser.email}
//                     onChange={(e) => handleChange(e, editingUser, setEditingUser)}
//                     className="form-control"
//                   />
//                 ) : (
//                   user.email
//                 )}
//               </td>
//               <td>
//                 {editingUser && editingUser.id === user.id ? (
//                   <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
//                     Save
//                   </button>
//                 ) : (
//                   <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>
//                     Edit
//                   </button>
//                 )}
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>{apidata.length + 1}</td>
//             <td>
//               <input
//                 type="text"
//                 name="avatar"
//                 value={newUser.avatar}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control"
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={newUser.first_name}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control"
//               />
//               <input
//                 type="text"
//                 name="last_name"
//                 value={newUser.last_name}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control mt-1"
//               />
//             </td>
//             <td>
//               <input
//                 type="email"
//                 name="email"
//                 value={newUser.email}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control"
//               />
//             </td>
//             <td>
//               <button className="btn btn-primary btn-sm" onClick={handleAdd}>
//                 Add
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './axios-dark.css'; // Dark mode CSS

// export default function Axios() {
//   const [apidata, setApidata] = useState([]);
//   const [editingUser, setEditingUser] = useState(null);
//   const [newUser, setNewUser] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     avatar: ""
//   });

//   useEffect(() => {
//     axios.get("https://reqres.in/api/users?page=2").then((resp) => {
//       setApidata(resp.data.data);
//     });
//   }, []);

//   const handleDelete = (id) => {
//     setApidata(apidata.filter(user => user.id !== id));
//   };

//   const handleEdit = (user) => {
//     setEditingUser({ ...user });
//   };

//   const handleSave = () => {
//     setApidata(apidata.map(user => user.id === editingUser.id ? editingUser : user));
//     setEditingUser(null);
//   };

//   const handleAdd = () => {
//     setApidata([...apidata, { ...newUser, id: apidata.length + 1 }]);
//     setNewUser({ first_name: "", last_name: "", email: "", avatar: "" });
//   };

//   const handleChange = (e, user, setUser) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   return (
//     <div className="container mt-5">
//       <h1>This is Axios</h1>
//       <table className="table table-bordered table-striped">
//         <thead>
//           <tr>
//             <th>Sno.</th>
//             <th>Avatar</th>
//             <th>UserName</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {apidata.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   src={user.avatar}
//                   alt={`${user.first_name} ${user.last_name}`}
//                   className="img-thumbnail bigger-img" // Increased image size
//                 />
//               </td>
//               <td>
//                 {editingUser && editingUser.id === user.id ? (
//                   <input
//                     type="text"
//                     name="first_name"
//                     value={editingUser.first_name}
//                     onChange={(e) => handleChange(e, editingUser, setEditingUser)}
//                     className="form-control"
//                   />
//                 ) : (
//                   user.first_name
//                 )}
//                 {editingUser && editingUser.id === user.id ? (
//                   <input
//                     type="text"
//                     name="last_name"
//                     value={editingUser.last_name}
//                     onChange={(e) => handleChange(e, editingUser, setEditingUser)}
//                     className="form-control mt-1"
//                   />
//                 ) : (
//                   ` ${user.last_name}`
//                 )}
//               </td>
//               <td>
//                 {editingUser && editingUser.id === user.id ? (
//                   <input
//                     type="email"
//                     name="email"
//                     value={editingUser.email}
//                     onChange={(e) => handleChange(e, editingUser, setEditingUser)}
//                     className="form-control"
//                   />
//                 ) : (
//                   user.email
//                 )}
//               </td>
//               <td>
//                 {editingUser && editingUser.id === user.id ? (
//                   <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
//                     Save
//                   </button>
//                 ) : (
//                   <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>
//                     Edit
//                   </button>
//                 )}
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>{apidata.length + 1}</td>
//             <td>
//               <input
//                 type="text"
//                 name="avatar"
//                 value={newUser.avatar}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control"
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={newUser.first_name}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control"
//               />
//               <input
//                 type="text"
//                 name="last_name"
//                 value={newUser.last_name}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control mt-1"
//               />
//             </td>
//             <td>
//               <input
//                 type="email"
//                 name="email"
//                 value={newUser.email}
//                 onChange={(e) => handleChange(e, newUser, setNewUser)}
//                 className="form-control"
//               />
//             </td>
//             <td>
//               <button className="btn btn-primary btn-sm" onClick={handleAdd}>
//                 Add
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './axios-dark.css'; // Dark mode CSS

export default function Axios() {
  const [apidata, setApidata] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
  });

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((resp) => {
      setApidata(resp.data.data);
    });
  }, []);

  const handleDelete = (id) => {
    setApidata(apidata.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser({ ...user });
  };

  const handleSave = () => {
    setApidata(apidata.map(user => user.id === editingUser.id ? editingUser : user));
    setEditingUser(null);
  };

  const handleAdd = () => {
    setApidata([...apidata, { ...newUser, id: apidata.length + 1 }]);
    setNewUser({ first_name: "", last_name: "", email: "", avatar: "" });
  };

  const handleChange = (e, user, setUser) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container mt-5">
      <h1>This is Axios</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Avatar</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="img-thumbnail bigger-img" // Increased image size
                />
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    name="first_name"
                    value={editingUser.first_name}
                    onChange={(e) => handleChange(e, editingUser, setEditingUser)}
                    className="form-control"
                  />
                ) : (
                  user.first_name
                )}
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    name="last_name"
                    value={editingUser.last_name}
                    onChange={(e) => handleChange(e, editingUser, setEditingUser)}
                    className="form-control mt-1"
                  />
                ) : (
                  ` ${user.last_name}`
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editingUser.email}
                    onChange={(e) => handleChange(e, editingUser, setEditingUser)}
                    className="form-control"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>
                    Edit
                  </button>
                )}
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>{apidata.length + 1}</td>
            <td>
              <input
                type="text"
                name="avatar"
                value={newUser.avatar}
                onChange={(e) => handleChange(e, newUser, setNewUser)}
                className="form-control"
              />
            </td>
            <td>
              <input
                type="text"
                name="first_name"
                value={newUser.first_name}
                onChange={(e) => handleChange(e, newUser, setNewUser)}
                className="form-control"
              />
              <input
                type="text"
                name="last_name"
                value={newUser.last_name}
                onChange={(e) => handleChange(e, newUser, setNewUser)}
                className="form-control mt-1"
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={(e) => handleChange(e, newUser, setNewUser)}
                className="form-control"
              />
            </td>
            <td>
              <button className="btn btn-primary btn-sm" onClick={handleAdd}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
