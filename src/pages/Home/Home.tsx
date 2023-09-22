import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

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
        <div className=" overflow-auto h-[180px]">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
