import React from "react";

const Add = () => {
  return (
    <div className="container m-auto ">
      <h1 className="text-2xl m-4 font-medium">Add Product</h1>
      <div className="grid  lg:grid-cols-3 gap-4 m-2 mb-8 sm:grid-cols-1">
        <div className=" mt-20 ">
          <div class="flex justify-center items-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

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
        <div className="col-span-2  mx-3 m-2">
          <div className="grid grid-cols-2">
            <div className=" text-sm font-medium text-slate-700">
              <h1>PRODUCT NAME</h1>
              <input
                type="text"
                name="product name"
                id="product name"
                placeholder="product name"
              />
            </div>
            <div>
              <h1 className="text-sm font-medium">SELECT CATEGORIES</h1>
              <input
                type="text"
                name="select categories"
                id=" categories"
                placeholder="categories"
              />
            </div>
          </div>
          <div className="my-12 ">
            <h1 className="text-sm font-medium">SLUG</h1>
            <input
              type="text"
              name="select categories"
              id=" categories"
              placeholder="categories"
            />
          </div>
          <div className="my-12">
            <h1 className="text-sm font-medium">SORT DESCRIPTION</h1>
            <input
              type="text"
              name="select categories"
              id=" categories"
              placeholder="categories"
            />
          </div>
          <div className="my-12 text-sm font-medium">COLORS</div>
          <div className="grid grid-cols-2 ">
            <div className="my-12">
              <h1 className="text-sm font-medium">PRICE(in USD)</h1>
              <input
                type="number"
                name="select categories"
                id=" categories"
                placeholder="categories"
              />
            </div>
            <div className="my-12">
              <h1 className="text-sm font-medium">QUANTITY</h1>
              <input
                type="number"
                name="select categories"
                id=" categories"
                placeholder="categories"
              />
            </div>
          </div>
          <div className="my-12">
            <h1 className="text-sm font-medium">FUL DETAIL</h1>
            <input
              type="text"
              name="select categories"
              id=" categories"
              placeholder="categories"
            />
          </div>
          <div className="my-12">
            <h1 className="text-sm font-medium">
              PRODUCT TAGS(Type and make comma to separate tags)
            </h1>
            <input
              type="text"
              name="select categories"
              id=" categories"
              placeholder="categories"
            />
          </div>
          <button className=" text-sm font-medium rounded-3xl px-3 bg-indigo-900 text-rose-50">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Add;
