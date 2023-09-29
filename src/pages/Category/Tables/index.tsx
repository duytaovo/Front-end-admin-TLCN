import React, { useEffect, useState } from "react";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
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
const TableCategory = ({ onClick }: Props) => {
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
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "loaiDm",
      headerName: "Loại loại hàng",
      width: 150,
      flex: 1,
    },
    { field: "name", headerName: "Tên loại hàng", width: 150, flex: 1 },
    // { field: "brand", headerName: "Hãng SX", width: 150, flex: 1 },
    // { field: "price", headerName: "Giá SP", width: 150, flex: 1 },
    // { field: "sale", headerName: "Khuyến mãi", width: 150, flex: 1 },
    { field: "mota", headerName: "Mô tả", width: 150, flex: 1 },
    { field: "image", headerName: "image", width: 150, flex: 1 },
    // {
    //   field: "regis",
    //   headerName: "Phương thức đăng ký",
    //   width: 150,
    //   renderCell: (params: any) => {
    //     const { row } = params;
    //     return (
    //       <div className="flex flex-wrap">
    //         {row.regis?.map((item: any, index: number) => (
    //           <div key={index} className="">
    //             <span>{item}</span>
    //           </div>
    //         ))}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      renderCell: (params: any) => {
        const { row } = params;
        const handleChangeStatus = (e: any) => {};
        return (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Trạng thái</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={0}>Not verify</MenuItem>
              <MenuItem value={1}>Verify</MenuItem>
              <MenuItem value={2}>Disable</MenuItem>
              <MenuItem value={3}>Enable</MenuItem>
            </Select>
          </FormControl>
        );
      },
    },
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
            pathname: path.category,
            search: createSearchParams({
              // ...queryConfig,
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
            <Tooltip title="Thay đổi trạng thái " className="disabled:bg-white">
              <IconButton>
                <DeleteIcon className="text-red-700" />
              </IconButton>
            </Tooltip>
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
  const _rows = [
    {
      id: 1,
      loaiDm: "Điện thoại",
      brand: "Apple",
      name: "Iphone 15 Promax",
      price: "40.000.000đ",
      sale: "300.000đ",
      mota: "Là điện thoại mới ra mắt, có nhiều tính năng nổi bật như usb c,...",
      image:
        "	https://cdn2.cellphones.com.vn/insecure/rs:fill:35…ia/catalog/product/i/p/iphone-15-pro-max_2__5.jpg",
    },
  ];
  const handlePagination = (e: any, value: any) => {
    // setPage(value)
  };

  return (
    <>
      <DataTable
        rows={_rows}
        columns={columns}
        // totalPages={rows.length}
        // totalItems={rows?.length}
        // handleOnChange={handlePagination}
      />
    </>
  );
};

export default TableCategory;
