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
                <p className="mb-2 text-sm text-gray-500 text-black font-bold text-5xl">
                  765 * 850
                </p>
                <p>Please choose image according to the aspect ratio</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-24 text-center">
            <div>
              <p className="text-center"></p>

              <div class="flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
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
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">765 * 850</span>
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div>
              <div>
                <p className="text-center"></p>

                <div class="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
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
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">765 * 850</span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-center"></p>

                <div class="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
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
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">765 * 850</span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center grid grid-cols-2 m-4">
            <div>
              <div>
                <p className="text-center"></p>

                <div class="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
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
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">765 * 850</span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div>
                <p className="text-center"></p>

                <div class="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
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
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">765 * 850</span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
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
            {/* <!-- component --> */}
            <div>
              <div class="relative inline-flex self-center">
                <svg
                  class="text-white bg-purple-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40px"
                  height="40px"
                  viewBox="0 0 38 22"
                  version="1.1"
                >
                  <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                  <g
                    id="ZahnhelferDE—Design"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ZahnhelferDE–Icon&amp;Asset-Download"
                      transform="translate(-539.000000, -199.000000)"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Icon-/-ArrowRight-Copy-2"
                        transform="translate(538.000000, 183.521208)"
                      >
                        <polygon
                          id="Path-Copy"
                          transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                          points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <select class="text-2xl font-bold  h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option>SELECT CATEGORIES</option>
                  <option>Z-A</option>
                </select>
              </div>
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
