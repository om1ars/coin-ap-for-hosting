import { Delete, MapSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDbuser } from "../redux/reducers/settingsUserSlice";
import "./Profile$.scss";

export default function Profile$() {
  const mapUsers = useSelector((state) => state.dbUsers.user);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
      user.filter
    console.log(id);
  };

  const data = async () => {
    const getData = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);
    setUsers(getData);
  };

  console.log(users);

  useEffect(() => {
    data();
  }, []);
  return (
    <>
      {users.map((user) => (
        <section class="section about-section gray-bg" id="about">
          <div class="container">
            <div class="row align-items-center flex-row-reverse">
              <div class="col-lg-6">
                <div class="about-text go-to">
                  {/* <h3 class="dark-color">About {m.name}</h3> */}
                  {/* <h6 class="theme-color lead">&amp; based in {m.address}</h6> */}
                  <p>
                    {/* I <mark>{m?.job}</mark> services for customers of all */}
                    sizes, specializing in creating stylish, modern websites,
                    web services and online stores. My passion is to design
                    digital user experiences through the bold interface and
                    meaningful interactions.
                  </p>
                  <div class="row about-list">
                    <div class="col-md-6">
                      <div class="media">
                        <label>Birthday</label>
                        <p>4th april 1998</p>
                      </div>
                      <div class="media">
                        <label>Age</label>
                        <p>22 Yr</p>
                      </div>
                      <div class="media">
                        <label>Residence</label>
                        {/* <p>{m.address}</p> */}
                      </div>
                      <div class="media">
                        <label>Address</label>
                        <p>California, USA</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="media">
                        <label>E-mail</label>
                        {/* <p>{m.email}</p> */}
                      </div>
                      <div class="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                      <div class="media">
                        <label>Skype</label>
                        <p>skype.0404</p>
                      </div>
                      <div class="media">
                        <label>Freelance</label>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    title=""
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="counter">
              <div class="row">
                <div class="col-6 col-lg-3">
                  <div class="count-data text-center">
                    <h6 class="count h2" data-to="500" data-speed="500">
                      500
                    </h6>
                    <p class="m-0px font-w-600">Happy Clients</p>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="count-data text-center">
                    <h6 class="count h2" data-to="150" data-speed="150"></h6>
                    <p class="m-0px font-w-600">Project Completed</p>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="count-data text-center">
                    <h6 class="count h2" data-to="850" data-speed="850">
                      850
                    </h6>
                    <p class="m-0px font-w-600">Photo Capture</p>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="count-data text-center">
                    <h6 class="count h2" data-to="190" data-speed="190">
                      190
                    </h6>
                    <p class="m-0px font-w-600">Telephonic Talk</p>
                  </div>
                  <Delete onClick={handleDelete(user.id)} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
