import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

interface Props {
  rows: any;
  title: string;
  productColumns: any;
  type: string;
  reply: boolean;
}

const Datatable = ({
  rows,
  title,
  productColumns,
  type = "",
  reply = false,
}: Props) => {
  const dispatch = useDispatch();
  const idPro = useParams();
  const handleDelete = (id: number, repply: string) => {
    // setData(data.filter((item) => item.id !== id));
    // if (type === "comment") {
    //   const getCommentDel = rows.find((item) => item.id === id);
    //   if (repply === null) {
    //     //Tìm phần tử con
    //     let commentsDel = rows.filter((item) => item.creator.replyforId === id);
    //     if (commentsDel.length === 0) {
    //       removeComments(dispatch, id, idPro.commentId);
    //       console.log("idDel1", id);
    //     } else {
    //       //khi xóa cha thì sẽ xóa các con comment
    //       for (let index = 0; index < commentsDel.length; index++) {
    //         console.log("idDel2", commentsDel[index].id);
    //         removeComments(dispatch, commentsDel[index].id, idPro.commentId);
    //       }
    //       removeComments(dispatch, id, idPro.commentId);
    //     }
    //   } else {
    //     removeComments(dispatch, id, idPro.commentId);
    //     console.log("idDel3", id);
    //   }
    // }
    // if (type === "review") {
    //   removeReviews(dispatch, id, idPro.commentId);
    // }
    // if (type === "user") {
    //   removeUser(dispatch, id);
    // }
    // // if (type === 'products') {
    // //   productService.deleteProductByID(id)
    // // }
    // if (confirm("Bạn có chắc muốn xóa sản phẩm này không") == true) {
    //   productService.deleteProductByID(id);
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 500);
    // } else {
    // }
  };
  // const hanleReplly = (id)=>{
  //   repplyComments(dispatch,id,idPro.commentId)
  // }
  const handleAddPostModal = (repllyforId: number) => {
    // showModal(dispatch, repllyforId);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="flex items-center gap-4 ">
            {type === "comment" && !reply && (
              <Link
                to={`/comments/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="p-[2px_5px] rounded text-[darkblue] border-[1px] border-[rgba(0,0,139,0.596)] border-dotted cursor-pointer">
                  View
                </div>
              </Link>
            )}
            {type === "comment" && reply && (
              <button
                className=""
                onClick={() => {
                  if (params.row.creator.replyforId) {
                    handleAddPostModal(params.row.creator.replyforId);
                  } else {
                    handleAddPostModal(params.row.id);
                  }
                }}
              >
                Replly
              </button>
            )}
            {type === "review" && (
              <Link
                to={`/reviews/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="p-[2px_5px] rounded text-[darkblue] border-[1px] border-[rgba(0,0,139,0.596)] border-dotted cursor-pointer">
                  View
                </div>
              </Link>
            )}
            {type === "user" && (
              <Link
                to={`/users/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="p-[2px_5px] rounded text-[darkblue] border-[1px] border-[rgba(0,0,139,0.596)] border-dotted cursor-pointer">
                  View
                </div>
              </Link>
            )}
            {type === "products" && (
              <Link
                to={`/products/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="p-[2px_5px] rounded text-[darkblue] border-[1px] border-[rgba(0,0,139,0.596)] border-dotted cursor-pointer">
                  View
                </div>
              </Link>
            )}
            <div
              className="p-[2px_5px] rounded text-[crimson] border-[1px] border-[rgba(220,20,60,0.6)] cursor-pointer"
              onClick={() => {
                if (type === "comment") {
                  handleDelete(params.row.id, params.row.creator.replyforId);
                } else {
                  // handleDelete(params.row.id);
                }
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[600px] p-[20px] ">
      <div
        className="w-full text-[24px] text-gray-500 mb-[10px] flex items-center justify-between
      "
      >
        Add New {title}
        <Link
          to={"/" + type + "/new"}
          className="no-underline text-green-500 text-base font-medium border-[1px] border-solid border-[green] p-1 rounded cursor-pointer"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={productColumns?.concat(actionColumn)}
        // pageSize={9}
        // rowsPerPageOptions={[9]}
        checkboxSelection
      />
      {/* <CreatePostModal></CreatePostModal> */}
    </div>
  );
};

export default Datatable;
