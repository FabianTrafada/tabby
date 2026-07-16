"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-svh items-start justify-end gap-4 p-6">
      <OrganizationSwitcher />
      <UserButton />
    </div>
  )
}