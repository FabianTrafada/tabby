import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider, ThemeToggle } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ClerkProvider appearance={{ theme: shadcn }}>
          <ThemeProvider>
            <AppHeader />
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}

/**
 * Top navigation bar with Clerk auth controls.
 *
 * Renders sign-in / sign-up buttons when signed out and a user button when
 * signed in, plus the theme toggle. Hidden on the Clerk-hosted auth routes,
 * which already render their own full-screen auth UI.
 */
function AppHeader() {
  return (
    <header className="relative z-10 flex items-center justify-end gap-2 px-4 py-3 sm:px-6">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <span className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Sign in
          </span>
        </SignInButton>
        <SignUpButton mode="modal">
          <span className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Sign up
          </span>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <ThemeToggle />
    </header>
  )
}
