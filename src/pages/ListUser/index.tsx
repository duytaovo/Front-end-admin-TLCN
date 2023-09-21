import React from "react";
import UserTable from "../TablesUser";

type Props = {};

const ListUser = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value: boolean) => {
    setOpen(value);
  };
  return (
    <div>
      <UserTable onClick={handleOpen} />
    </div>
  );
};

export default ListUser;
