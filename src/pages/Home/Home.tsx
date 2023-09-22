import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts ">
        <div className="">
          <Featured />
        </div>
        <Chart title="Last 6 Months (Revenue)" />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <div className=" overflow-auto h-[100px]">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
