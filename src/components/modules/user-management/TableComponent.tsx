import { Button } from "@/components/ui/button"

import { useSearchParams } from "react-router-dom"

import { invoices as rowInvoices } from "@/utils/constant"
import TableData from "./Table"
import TableSearch from "./TableSearch"

export default function TableComponent() {
  const filterInvoices = rowInvoices.filter((d, _) => d.status != "pending")

  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get("page") || "1", 10)
  const limit = parseInt(searchParams.get("limit") || "3", 10)
  const term = searchParams.get("term")?.toLowerCase() || ""

  
  const filteredInvoices = filterInvoices.filter(
    (inv) =>
      inv.invoice.toLowerCase().includes(term) ||
      inv.method.toLowerCase().includes(term) ||
      inv.to.toLowerCase().includes(term)
  )

  const totalPages = Math.ceil(filteredInvoices.length / limit)
  const startIndex = (page - 1) * limit
  const currentRows = filteredInvoices.slice(startIndex, startIndex + limit)

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage), limit: String(limit), term })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value) {
      setSearchParams({ page: "1", limit: String(limit), term: value })
    } else {
      setSearchParams({ page: "1", limit: String(limit) })
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-3 md:p-4 bg-white shadow-md rounded-xl space-y-4">
      
      <TableSearch term={term} handleSearchChange={handleSearchChange}/>


      <TableData data={currentRows} />

      






      {/* footer  */}
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
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>

       



        <div className="flex items-center gap-2 justify-end ">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </Button>





 <div className="text-sm text-gray-600 text-center">
          Page {page} of {totalPages || 1}
        </div>








          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages || totalPages === 0}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
