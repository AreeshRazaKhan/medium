"use client";
import React from "react";

const Wallet = () => {
  const balance = 45.0;

  // Dummy Transactions Data
  const transactions = [
    {
      id: 1,
      type: "Added Funds",
      method: "JazzCash",
      amount: 20.0,
      date: "Mar 05, 2026",
      status: "Completed",
    },
    {
      id: 2,
      type: "Blue Tick Purchase",
      method: "Wallet",
      amount: -3.0,
      date: "Mar 01, 2026",
      status: "Completed",
    },
    {
      id: 3,
      type: "Featured Slot",
      method: "Wallet",
      amount: -10.0,
      date: "Feb 25, 2026",
      status: "Completed",
    },
  ];

  const paymentMethods = [
    { name: "JazzCash", id: "jazzcash", icon: "📱" },
    { name: "Easypaisa", id: "easypaisa", icon: "💳" },
    { name: "PayPal", id: "paypal", icon: "🌐" },
    { name: "USDT (Crypto)", id: "crypto", icon: "💎" },
  ];

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      {/* Balance Card */}
      <div className="bg-black text-white p-8 rounded-3xl mb-8 shadow-xl">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">
          Total Balance
        </p>
        <h3 className="font-semibold! font-montserrat -tracking-[0.1rem]! mt-2">
          ${balance.toFixed(2)}
        </h3>
      </div>

      {/* Add Funds Section */}
      <h4 className="font-semibold! font-montserrat -tracking-[0.1rem]! mb-6">
        Add Funds
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className="flex items-center gap-4 p-5 border rounded-2xl hover:border-black transition-all group"
          >
            <span className="text-2xl">{method.icon}</span>
            <span className="font-bold">{method.name}</span>
            <span className="ml-auto text-gray-400 group-hover:text-black">
              →
            </span>
          </button>
        ))}
      </div>

      {/* Transaction History */}
      <div className="border rounded-2xl overflow-hidden bg-white">
        <div className="p-5 border-b bg-gray-50 flex justify-between items-center">
          <h5 className="font-semibold! font-montserrat -tracking-[0.1rem]!">
            Recent Transactions
          </h5>
          <span className="text-xs font-bold text-gray-400 uppercase">
            Last 30 Days
          </span>
        </div>

        {transactions.length > 0 ? (
          <div className="divide-y">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="p-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="font-bold text-sm">{tx.type}</p>
                  <p className="text-xs text-gray-400">
                    {tx.date} • {tx.method}
                  </p>
                </div>
                <div
                  className={`font-bold text-sm ${tx.amount > 0 ? "text-green-600" : "text-black"}`}
                >
                  {tx.amount > 0
                    ? `+$${tx.amount.toFixed(2)}`
                    : `-$${Math.abs(tx.amount).toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-10 text-center text-gray-400 text-sm">
            No recent transactions found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
