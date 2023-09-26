import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "src/components/Search";
import UserDatatable from "src/components/Userdatatable/UserDatatable";
import { userColumns } from "src/datatablesource";
import TableUser from "./Tables";

const ListUser = () => {
  const locationUrl = useLocation();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getUsers() {
      //   const res = await UserService.getUsers().then((res) => setData(res.data));
    }
    getUsers();
  }, []);
  return (
    <div className="">
      <div className="">
        {/* <UserDatatable
          rows={data}
          title=""
          userColumns={userColumns}
          setData={setData}
        /> */}

        <div>
          <TableUser onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ListUser;
