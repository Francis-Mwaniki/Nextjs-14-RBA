'use client'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard. Select a role-specific page from the sidebar.</p>
      </div>
      <Link href="/admin/create-invite" className="
      bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600
      flex justify-center items-center
      max-w-[30%] my-2
       ">
        Create Invite
      </Link>
    </Layout>
  )
}