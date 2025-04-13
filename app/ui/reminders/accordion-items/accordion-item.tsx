"use client";

import { LightBulbIcon } from "@heroicons/react/24/outline";

export function ReminderAccordionItem({ data }: { data: any }) {
  let defaultData = [
    {
      id: "34b04757-2e7c-4cb4-ad20-e1ba1935c714",
      user_id: 1,
      label: "glucose",
      name: "Glucose",
      amount: 0,
      units: "grams",
      time: "",
      date: new Date()
    }
  ];
  let morning = data[0].length > 0 ? data[0] : defaultData;
  let afternoon = data[1].length > 0 ? data[1] : defaultData;
  let evening = data[2].length > 0 ? data[2] : defaultData;
  let night = data[3].length > 0 ? data[3] : defaultData;

  console.log(data[2].length);

  return (
    <div className="w-full">
      <div className="bg-green-500 p-3">
        <h1 className="text-white px-12">TODAY</h1>
      </div>
      <div className="flex flex-col pt-2">
        <div className="bg-gray-200 px-4 py-4">
          {/* Morining */}
          {morning.map((data1?: any, idx?: any) => (
            <div className="grid grid-cols-8 pb-4" key={idx}>
              <div className="col-span-1 flex justify-end pr-4">
                <LightBulbIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex flex-col justify-startflex col-span-7">
                <div className="flex flex-col justify-start">
                  <div
                    className={`flex justify-between items-center  rounded-xl p-1 pr-4 ${
                      data1.amount < 4 ? "bg-red-200" : "bg-green-200"
                    }`}
                  >
                    <p className="p-2 text-md">
                      <strong>
                        {new Date(data1.date).toDateString()} Morning
                      </strong>
                    </p>
                    <div
                      className={` rounded-xl shadow-lg p-2 ml-4 h-full ${
                        data1.amount < 4 || data1.amount > 8
                          ? "bg-red-900"
                          : "bg-green-600"
                      } `}
                    >
                      <p className="text-white text-md p4">{data1.amount}</p>
                    </div>
                  </div>
                  <div>
                    <p className="px-4 pt-2">
                      Glucose:{" "}
                      <span
                        className={` text-md${
                          data1.amount < 4 ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {data1.amount}
                      </span>
                      <span className="text-xs pl-1">Mmmol</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* afternoon */}
          {afternoon.map((data1?: any, idx?: any) => (
            <div className="grid grid-cols-8 pb-4" key={idx}>
              <div className="col-span-1 flex justify-end pr-4">
                <LightBulbIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex flex-col justify-startflex col-span-7">
                <div className="flex flex-col justify-start">
                  <div
                    className={`flex justify-between items-center  rounded-xl p-1 pr-4 ${
                      data1.amount > 8 ? "bg-red-200" : "bg-green-200"
                    } `}
                  >
                    <p className="p-2 text-md">
                      <strong>
                        {new Date(data1.date).toDateString()} Evening
                      </strong>
                    </p>
                    <div
                      className={` rounded-xl shadow-lg p-2 ml-4 h-full ${
                        data1.amount < 4 || data1.amount > 8
                          ? "bg-red-900"
                          : "bg-green-600"
                      } `}
                    >
                      <p className="text-white text-md p4">{data1.amount}</p>
                    </div>
                  </div>
                  <div>
                    <p className="px-4 pt-2">
                      Glucose:{" "}
                      <span
                        className={` text-md${
                          data1.amount < 4 ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {data1.amount}
                      </span>
                      <span className="text-xs pl-1">Mmmol</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* evening */}
          {evening.map((data1?: any, idx?: any) => (
            <div className="grid grid-cols-8 pb-4" key={idx}>
              <div className="col-span-1 flex justify-end pr-4">
                <LightBulbIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex flex-col justify-startflex col-span-7">
                <div className="flex flex-col justify-start">
                  <div
                    className={`flex justify-between items-center  rounded-xl p-1 pr-4 ${
                      data1.amount < 4 ? "bg-red-200" : "bg-green-200"
                    }`}
                  >
                    <p className="p-2 text-md">
                      <strong>
                        {new Date(data1.date).toDateString()} Afternoon
                      </strong>
                    </p>
                    <div
                      className={` rounded-xl shadow-lg p-2 ml-4 h-full ${
                        data1.amount < 4 || data1.amount > 8
                          ? "bg-red-900"
                          : "bg-green-600"
                      } `}
                    >
                      <p className="text-white text-md p4">{data1.amount}</p>
                    </div>
                  </div>
                  <div>
                    <p className="px-4 pt-2">
                      Glucose:{" "}
                      <span
                        className={` text-md${
                          data1.amount < 4 ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {data1.amount}
                      </span>
                      <span className="text-xs pl-1">Mmmol</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* night */}
          {night.map((data1?: any, idx?: any) => (
            <div className="grid grid-cols-8 pb-4" key={idx}>
              <div className="col-span-1 flex justify-end pr-4">
                <LightBulbIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex flex-col justify-startflex col-span-7">
                <div className="flex flex-col justify-start">
                  <div
                    className={`flex justify-between items-center  rounded-xl p-1 pr-4 ${
                      data1.amount < 4 ? "bg-red-200" : "bg-green-200"
                    }`}
                  >
                    <p className="p-2 text-md">
                      <strong>
                        {new Date(data1.date).toDateString()} Night
                      </strong>
                    </p>
                    <div
                      className={` rounded-xl shadow-lg p-2 ml-4 h-full ${
                        data1.amount < 4 || data1.amount > 8
                          ? "bg-red-900"
                          : "bg-green-600"
                      } `}
                    >
                      <p className="text-white text-md p4">{data1.amount}</p>
                    </div>
                  </div>
                  <div>
                    <p className="px-4 pt-2">
                      Glucose:{" "}
                      <span
                        className={` text-md${
                          data1.amount < 4 || data1.amount > 8
                            ? "text-red-700"
                            : "text-green-700"
                        }`}
                      >
                        {data1.amount}
                      </span>
                      <span className="text-xs pl-1">Mmmol</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
