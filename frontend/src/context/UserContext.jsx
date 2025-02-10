import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState({
        email: '',
        fullname: {
            firstName: '',
            lastName: '',
        }
    });


  return (
    <div>
      <UserDataContext.Provider value={user}>{children}</UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
