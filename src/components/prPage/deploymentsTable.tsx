// components/DeploymentsTable.tsx

export const DeploymentsTable = () => {
    return (
      <div className="space-y-4">
        {/* Info Text */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          The latest updates on your projects.{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            Learn more about Vercel for Git ↗︎
          </a>
        </div>
  
        {/* Deployments Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200 dark:border-neutral-700">
            <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Preview</th>
                <th className="px-4 py-2 font-medium">Updated (UTC)</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200">
              <tr className="border-t border-gray-200 dark:border-neutral-700">
                <td className="px-4 py-2">ui</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                    ✅ <span>Ready</span>
                    <span className="underline ml-1 cursor-pointer hover:text-blue-600">
                      Inspect
                    </span>
                  </span>
                </td>
                <td className="px-4 py-2">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit Preview
                  </a>
                </td>
                <td className="px-4 py-2">Mar 17, 2025 10:54am</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-neutral-700">
                <td className="px-4 py-2">v4</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                    ✅ <span>Ready</span>
                    <span className="underline ml-1 cursor-pointer hover:text-blue-600">
                      Inspect
                    </span>
                  </span>
                </td>
                <td className="px-4 py-2">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
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
  