import AddExpense from "../Components/AddExpense";
import AddIncome from "../Components/AddIncome";
import Balance from "../Components/Balance";
import Transactions from "../Components/Transactions";

const Home = () => {
  return (
    <div className="flex w-full gap-4 p-4">
      <div className="flex w-1/4 items-center h-fit bg-red-200">
        <AddExpense />
      </div>
      <div className="flex w-1/4 items-center h-fit bg-red-200">
        <Balance />
      </div>
      <div className="flex w-1/4 items-center h-fit bg-red-200">
        <Transactions />
      </div>
      <div className="flex w-1/4 items-center h-fit bg-red-200">
        <AddIncome />
      </div>
    </div>
  );
};

export default Home;
