const Balance = ({ amount = 2450.75, currency = "AED" }) => {
  return (
    <div className="flex w-full justify-center mt-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg px-8 py-6 w-full max-w-md flex flex-col items-center">
        <span className="text-white text-lg font-medium mb-2">
          Current Balance
        </span>
        <span className="text-4xl font-bold text-white tracking-tight mb-2">
          {currency} {amount.toLocaleString()}
        </span>
        <span className="text-white/80 text-sm">Updated just now</span>
      </div>
    </div>
  );
};

export default Balance;
