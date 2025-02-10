import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-5" src="/assets/logo-uber.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">Enter your name!</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">Enter your email!</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="example@gmail.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password!</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm">
            Create Account
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided .
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
