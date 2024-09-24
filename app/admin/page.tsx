'use client'
import Layout from '@/components/Layout'

export default function AdminPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
        <p>This page is only accessible to users with the ADMIN role.</p>
      </div>
    </Layout>
  )
}