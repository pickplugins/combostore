'use client'
import React from 'react'

const LicenseEdit = ({ id }) => {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* Page heading: this screen showed a bare line of text. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("License")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>

      <div className="form-card rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500 shadow-sm">
        {("No license details are wired up for this route yet.")}
      </div>
    </div>
  )
}

export default LicenseEdit
