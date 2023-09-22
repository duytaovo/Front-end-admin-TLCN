import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Box, CircularProgress, Typography } from "@mui/material";

const Featured = () => {
  return (
    <div className="flex-[2] shadow-[2px 4px 10px 1px rgba(0, 0, 0, 0.47)] p-[3]">
      <div className="flex items-center justify-between text-gray-500">
        <h1 className="text-base font-medium">Total Revenue</h1>
        <MoreVertIcon fontSize="large" />
      </div>
      <div className="p-5 flex items-center justify-between flex-col gap-4">
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" size={"80px"} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "70%",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              fontSize={"45px"}
            >
              $3420
            </Typography>
          </Box>
        </Box>
        {/* </div> */}
        <p className="text-gray-500 font-medium">Total sales made today</p>
        <p className="text-[25px]">$420</p>
        <p className="font-[300] text-[12px] text-gray-500 text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="text-center">
            <div className="text-sm text-gray-500">Target</div>
            <div className="flex item-center mt-[10px] text-sm text-red-500">
              <KeyboardArrowDownIcon fontSize="medium" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Last Week</div>
            <div className="flex item-center mt-[10px] text-sm text-green-500">
              <KeyboardArrowUpOutlinedIcon fontSize="medium" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Last Month</div>
            <div className="flex item-center mt-[10px] text-sm text-green-500">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
