import AddExpense from "../Components/AddExpense";
import AddIncome from "../Components/AddIncome";
import Balance from "../Components/Balance";
import Transactions from "../Components/Transactions";

const Home = () => {
  return (
    <div className="flex w-full gap-4 p-4">
      <div className="flex flex-1 items-center h-fit">
        <AddExpense />
      </div>
      <div className="flex flex-1 items-center h-fit">
        <Balance />
      </div>
      <div className="flex flex-1 items-center h-fit">
        <Transactions />
      </div>
      <div className="flex flex-1 items-center h-fit">
        <AddIncome />
      </div>
    </div>
  );
};

export default Home;
