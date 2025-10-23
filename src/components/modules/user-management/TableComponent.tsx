import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router-dom"
import TableData from "./Table"
import TableSearch from "./TableSearch"
import { useUserListQuery } from "@/redux/features/admin/admin.api"







export default function TableComponent() {
  const [searchParams, setSearchParams] = useSearchParams()

  
  const getParam = (key: string, fallback: string) => searchParams.get(key) || fallback

  const page = parseInt(getParam("page", "1"), 10)
  const limit = parseInt(getParam("limit", "5"), 10)
  const term = getParam("term", "").toLowerCase()

  
  const { data, isLoading, isError, error } = useUserListQuery({page, limit, term})
  
  const users = data?.data || []
  const meta = data?.meta

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage), limit: String(limit), term })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchParams({
      page: "1",
      limit: String(limit),
      ...(value ? { term: value } : {}),
    })
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-3 md:p-4 bg-white shadow-md rounded-xl space-y-4">
      {isError && (
        <h1 className="text-center text-red-600 font-semibold text-xl">
          {(error as any)?.data?.message || "Something went wrong"}
        </h1>
      )}

      <TableSearch term={term} handleSearchChange={handleSearchChange} />

      <TableData data={users} isLoading={isLoading} />

      <div className="flex gap-4 border-t pt-4 justify-between items-center md:flex-row flex-col">

        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="text-sm text-gray-600">
            Rows per page:
          </label>
          <select
            
            id="limit"
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={limit}
            onChange={(e) =>
              setSearchParams({ page: "1", limit: e.target.value, term })
            }
          >
            <option value="5">5</option>
            <option value="7">7</option>
            <option  value="10">10</option>
          </select>
        </div>


        <div className="flex items-center gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </Button>

          <div className="text-sm text-gray-600 text-center">
            Page {page} of {meta?.totalPages || 1}
          </div>

          <Button
            variant="outline"
            size="sm"
            disabled={page === meta?.totalPages || !meta?.totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
