// components/DeploymentsTable.tsx

export const DeploymentsTable = () => {
    return (
      <div className="space-y-4">
        {/* Info Text */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <strong>The latest updates on your projects.</strong>{" "}Learn more about {" "}
          <a
            href="#"
            className="text-[#0969da] border-b-1 dark:text-blue-400  inline-flex items-center"
          >
            Vercel for Git ↗︎
          </a>
        </div>
  
        {/* Deployments Table */}
        <div className="overflow-x-auto">
          <table className="text-sm text-left border border-gray-200 dark:border-neutral-700">
            <thead className="bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 font-bold">Name</th>
                <th className="px-4 py-2 font-bold">Status</th>
                <th className="px-4 py-2 font-bold">Preview</th>
                <th className="px-4 py-2 font-bold">Updated (UTC)</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200">
              <tr className="border-t border-gray-200 dark:border-neutral-700">
                <td className="px-4 py-2 font-bold">ui</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center  ">
                    ✅ <span className="mx-1 text-green-600 dark:text-green-400">Ready</span>
                    (<span className=" cursor-pointer hover:text-blue-600 text-[#0969da] border-b-1">
                      Inspect
                    </span>)
                  </span>
                </td>
                <td className="px-4 py-2">
                  <a
                    href="#"
                    className="text-[#0969da] border-b-1 dark:text-blue-400 "
                  >
                    Visit Preview
                  </a>
                </td>
                <td className="px-4 py-2">Mar 17, 2025 10:54am</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800">
                <td className="px-4 py-2 font-bold">v4</td>
                <td className="px-4 py-2">
                <span className="inline-flex items-center  ">
                    ✅ <span className="mx-1 text-green-600 dark:text-green-400">Ready</span>
                    (<span className=" cursor-pointer hover:text-blue-600 text-[#0969da] border-b-1">
                      Inspect
                    </span>)
                  </span>
                </td>
                <td className="px-4 py-2">
                  <a
                    href="#"
                    className="text-[#0969da] border-b-1 dark:text-blue-400 "
                  >
                    Visit Preview
                  </a>
                </td>
                <td className="px-4 py-2">Mar 17, 2025 10:54am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  