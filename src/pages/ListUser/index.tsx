import React from "react";
import UserTable from "../TablesUser";
import ListUser from "./ListUser";

type Props = {};

const Users = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value: boolean) => {
    setOpen(value);
  };
  return (
    <div className="">
      {/* <UserTable onClick={handleOpen} /> */}\
      <ListUser />
    </div>
  );
};

export default Users;
