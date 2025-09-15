import { useForm } from "@tanstack/react-form";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Form = ({ type }) => {
  const IsExpense = type == "expenses";
  const form = useForm({
    defaultValues: {
      amountInRs: "",
      amountInPs: "",
      mode: "",
    },
    onSubmit: ({ value }) => {
      alert(`Amount Entered is ${value["amountInRs"]} ${value["amountInPs"]}`);
    },
  });
  return (
    <div className="px-6 flex  gap-2  flex-col  max-w-sm justify-center ">
      {IsExpense ? (
        <div className="font-semibold  text-gray-800">Track your Expenses:</div>
      ) : (
        ""
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className={`w-full max-w-sm bg-white px-8 py-2 ${!IsExpense ? "mt-4" : ""} rounded-xl shadow-md`}
      >
        <div className="justify-between flex ">
          <label className="mb-2 font-medium text-gray-700">Amount</label>
          {IsExpense ? (
            <>
              <label className="font-medium text-gray-700 flex ml-12">
                Paid In
              </label>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2">
          <form.Field
            name="amountInRs"
            validators={{
              onSubmit: ({ value }) =>
                value.length === 0 && "Enter an valid amount!!",
            }}
            children={(field) => (
              <div className="flex flex-col w-full ">
                <input
                  id={field.name}
                  value={field.state.value ?? ""}
                  name={field.name}
                  placeholder="Rs."
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                />
                {field.state.meta.errors && (
                  <div className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors}
                  </div>
                )}
              </div>
            )}
          />
          <form.Field
            name="mode"
            children={(field) => (
              <div className="flex flex-col w-40">
                <input
                  id={field.name}
                  value={field.state.value ?? ""}
                  name={field.name}
                  placeholder="Ps."
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
          />{" "}
          {IsExpense && (
            <form.Field
              name="amountInPs"
              children={(field) => (
                <div className=" w-full">
                  <select
                    className="border border-gray-300 rounded-md p-2 w-full text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  >
                    <option value="">-Select-</option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="Online">Online</option>
                    <option value="Logistics">Others</option>
                  </select>
                </div>
              )}
            />
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition-all cursor-pointer"
          >
            <FaPlus />
            {IsExpense ? "Add Expense" : "Add Income"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
