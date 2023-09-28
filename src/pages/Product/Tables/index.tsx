import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import DataTable from "./Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material/Select";
import path from "src/constants/path";
import useQueryConfig from "src/hooks/useQueryConfig";
type Props = {
  onClick: (value: boolean) => void;
};
const TableProduct = ({ onClick }: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    // dispatch(getCars(""));
  }, []);
  const [status, setStatus] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const handleOpen = () => {
    onClick && onClick(true);
  };
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    { field: "location", headerName: "Vị trí", width: 150 },
    { field: "brand", headerName: "Thuơng hiệu xe", width: 150 },
    { field: "model", headerName: "Kiểu xe", width: 150 },
    { field: "type", headerName: "Loại phương tiện", width: 150 },
    { field: "license", headerName: "Loại biển xe", width: 150 },
    { field: "seri", headerName: "Dòng xe", width: 150 },
    {
      field: "regis",
      headerName: "Phương thức đăng ký",
      width: 150,
      renderCell: (params: any) => {
        const { row } = params;
        return (
          <div className="flex flex-wrap">
            {row.regis?.map((item: any, index: number) => (
              <div key={index} className="">
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      },
    },
    // {
    //   field: 'status',
    //   headerName: 'Trạng thái',
    //   width: 150,
    //   renderCell: (params: any) => {
    //     const { row } = params
    //     const handleChangeStatus = (e: any) => {}
    //     return (
    //       <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
    //         <InputLabel id='demo-select-small-label'>Trạng thái</InputLabel>
    //         <Select
    //           labelId='demo-select-small-label'
    //           id='demo-select-small'
    //           value={status}
    //           label='Status'
    //           onChange={handleChange}
    //         >
    //           <MenuItem value={0}>Not verify</MenuItem>
    //           <MenuItem value={1}>Verify</MenuItem>
    //           <MenuItem value={2}>Disable</MenuItem>
    //           <MenuItem value={3}>Enable</MenuItem>
    //         </Select>
    //       </FormControl>
    //     )
    //   }
    // },
    {
      field: "action",
      headerName: "Tùy chỉnh",
      width: 120,
      sortable: false,
      renderCell: (params: any) => {
        const navigate = useNavigate();
        const { row } = params;
        const queryConfig = useQueryConfig();

        const handleClick = () => {
          navigate({
            // pathname: path.carMange,
            search: createSearchParams({
              ...queryConfig,
              id: row.id,
            }).toString(),
          });
        };
        return (
          <>
            <IconButton onClick={handleClick} className="text-mainColor">
              <EditIcon
                className="text-mainColor"
                sx={{
                  color: "",
                }}
              />
            </IconButton>
            {/* <Tooltip title='Thay đổi trạng thái xe' className='disabled:bg-white'>
              <IconButton>
                <DeleteIcon className='text-red-700' />
              </IconButton>
            </Tooltip> */}
          </>
        );
      },
    },
  ];
  const rows = [];
  for (let i = 0; i < user.length; i++) {
    rows.push({
      stt: i + 1,
    });
  }

  const handlePagination = (e: any, value: any) => {
    // setPage(value)
  };

  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
        // totalPages={rows.length}
        // totalItems={rows?.length}
        // handleOnChange={handlePagination}
      />
    </>
  );
};

export default TableProduct;