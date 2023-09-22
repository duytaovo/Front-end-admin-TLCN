import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserDatatable = ({ rows, title, userColumns, setData }: any) => {
  const handleDelete = (id: number) => {
    setData(rows.filter((item: any) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="flex items-center gap-4">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="p-[2px_5px] rounded text-[darkblue] border-[1px] border-[rgba(0,0,139,0.596)] border-dotted cursor-pointer">
                View
              </div>
            </Link>
            <div
              className="p-[2px_5px] rounded text-[crimson] border-[1px] border-[rgba(220,20,60,0.6)] cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[600px] p-[20px]">
      <div className="w-full text-[24px] text-gray-500 mb-[10px] flex items-center justify-between">
        Add New {title}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={userColumns?.concat(actionColumn)}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default UserDatatable;
