import React from 'react'
import LayoutComponents from "../shared/LayoutComponents"

export default function RightSidePanel() {
  return (
    <div className="flex flex-col gap-y-4">
      <section className="bg-white rounded-lg h-[400px]">
        <section className="flex flex-col p-2 pt-4 pl-4 font-semibold">
          Placeholder
        </section>
        <hr className="" />
      </section>
      <section className="bg-white rounded-lg h-[200px]">
        <section className="flex flex-col p-2 pt-4 pl-4 font-semibold">
          Placeholder
        </section>
        <hr className="" />
      </section>
      <section className="bg-white rounded-lg h-[200px]">
        <section className="flex flex-col p-2 pt-4 pl-4 font-semibold">
          Placeholder
        </section>
        <hr className="" />
      </section>
    </div>
  )
}
