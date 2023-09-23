import React from "react";
import ListUser from "./ListUser";

type Props = {};

const Users = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value: boolean) => {
    setOpen(value);
  };
  return (
    <div className="">
      <ListUser />
    </div>
  );
};

export default Users;
