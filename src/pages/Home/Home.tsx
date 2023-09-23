import ChartComponent from "src/components/Chart/Chart";
import Featured from "src/components/Featured/Featured";
import CustomTable from "src/components/Table/Table";
import Widget from "src/components/widget/Widget";

const Home = () => {
  return (
    <div>
      <div className="flex p-5 gap-5">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className=" flex p-5 gap-5">
        <div className="">
          <Featured />
        </div>
        <ChartComponent title="Last 6 Months (Revenue)" />
      </div>
      <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
        <div className="font-medium text-gray-500 mb-[15px]">
          Latest Transactions
        </div>
        <div className=" overflow-auto h-[180px]">
          <CustomTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
