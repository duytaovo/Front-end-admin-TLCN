import Widget from "src/components/widget/Widget";
import "./home.scss";
import Featured from "src/components/Featured";
import ChartComponent from "src/components/Chart/Chart";
import List from "src/components/Table/Table";

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
        <ChartComponent title="Last 6 Months (Revenue)" />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <div className=" overflow-auto h-[180px]">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
