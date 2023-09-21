import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserDatatable from "src/components/Userdatatable/UserDatatable";
import { userColumns } from "src/datatablesource";

const ListUser = () => {
  const locationUrl = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getUsers() {
      //   const res = await UserService.getUsers().then((res) => setData(res.data));
    }
    getUsers();
  }, []);
  return (
    <div className="">
      <div className="">
        <UserDatatable rows={data} title="" userColumns={userColumns} />
      </div>
    </div>
  );
};

export default ListUser;
