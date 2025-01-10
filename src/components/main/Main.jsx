import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { addUser, delUser, editUser } from "../../store/slices/todosSlice";

function Main() {
  // useEffect(() => {
  //   const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   savedUsers.forEach((user) => dispatch(addUser(user)));
  // }, []);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.value);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(null);
  const hanDelete = (id) => {
    dispatch(delUser(id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !age.trim()) {
      alert("To'ldirilsin");
      return null;
    }

    if (edit) {
      dispatch(editUser({ id: edit.id, img, name, email, age }));
      resetForm();
    } else {
      let todos = {
        id: new Date().getTime(),
        img: "https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
        name: name,
        email: email,
        age: age,
      };
      dispatch(addUser(todos));
      resetForm();
    }
  };
  console.log(img);

  function resetForm() {
    setImg("");
    setName("");
    setEmail("");
    setAge("");
    setEdit("");
  }

  const handleEdit = (user) => {
    setEdit(user);
    setImg(user.img);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} action="">
          {/* <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="img"
          /> */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="age"
          />
          <button type="submit">{edit ? "Update" : "Create"}</button>
        </form>
        <div className="main_container">
          {users.map((user, inx) => (
            <div key={user.id || inx} className="main_item">
              <img src={user.img} alt="" />
              <h1>{user.name} </h1>
              <h4>{user.email} </h4>
              <p>{user.age} </p>
              <div className="btns">
                <button onClick={() => hanDelete(user.id)}>
                  <MdDelete />
                </button>
                <button onClick={() => handleEdit(user)}>
                  <IoIosCreate style={{ color: "blue" }} />{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Main;
