import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  const handleLogout = async () => {
    // Implement logout logic here (clear token, etc.)
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link href="/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/admin" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Admin
          </Link>
          <Link href="/technician" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Technician
          </Link>
          <Link href="/driver" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Driver
          </Link>
          <Link href="/customer" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            Customer
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button onClick={handleLogout} className="w-full">Logout</Button>
        </div>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}