import React from "react";

const Add = () => {
  return (
    <div className="container m-auto ">
      <h1 className="text-2xl m-4 font-medium">Add Product</h1>
      <div className="grid grid-cols-3 gap-4 m-2 mb-8">
        <div className="bg-orange-400 mt-20 ">
          <h1 className="text-5xl font-bold text-center">765 * 850</h1>
          <p>Please choose image according to the aspect ratio</p>
          <div className="grid grid-cols-3 gap-3 mt-24 text-center">
            <div>
              <p className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </p>
              <p>765 * 850</p>
            </div>
            <div>
              <p className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </p>
              <p>765 * 850</p>
            </div>
            <div>
              <p className="text-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </p>
              <p>765 * 850</p>
            </div>
          </div>
          <div className="text-center grid grid-cols-2 m-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <p>765 * 850</p>
            </div>
            <div className="grid grid-rows-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <p>765 * 850</p>
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="col-span-2 bg-teal-400 mx-3 m-2">
          <div className="grid grid-cols-2">
            <h1 className="block text-sm font-medium text-slate-700">
              PRODUCT NAME
            </h1>
            <h1>SELECT CATEGORIES</h1>
          </div>
          <h1 className="my-12">SLUG</h1>
          <h1 className="my-12">SORT DESCRIPTION</h1>
          <h1 className="my-12">COLORS</h1>
          <div className="grid grid-cols-2 ">
            <h1 className="my-12">PRICE(in USD)</h1>
            <h1 className="my-12">QUANTITY</h1>
          </div>
          <h1 className="my-12">FUL DETAIL</h1>
          <h1 className="my-12">
            PRODUCT TAGS(Type and make comma to separate tags)
          </h1>
          <button className="rounded-3xl my-3 bg-indigo-900">Submit</button>
          <input
            type="text"
            name="product name"
            id="product name"
            placeholder="product name"
          />
        </div>
      </div>
    </div>
  );
};
export default Add;
