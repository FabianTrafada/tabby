import { auth } from "@clerk/nextjs/server"

export default async function TestPage() {
  const { userId } = await auth()

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex max-w-md flex-col gap-3 text-center">
        <h1 className="text-2xl font-semibold">Protected Test Page</h1>
        <p className="text-muted-foreground">
          This page is protected by Clerk. Only signed-in users can see it.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Your user ID:{" "}
          <code className="rounded bg-muted px-1 py-0.5">{userId}</code>
        </p>
      </div>
    </div>
  )
}