import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="page-shell">

      {/* Page heading: this screen was an unstyled placeholder list. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Licenses")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {("Placeholder list — not wired to the API yet")}
          </p>
        </div>
      </div>

      <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <div key={index} className="border-b border-gray-200 px-5 py-3 last:border-0">
              <Link className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/licenses/${item}`}>License {item}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
