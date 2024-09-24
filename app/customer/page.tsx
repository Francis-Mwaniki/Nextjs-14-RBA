'use client'
import Layout from '@/components/Layout'

export default function CustomerPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Customer Page</h1>
        <p>This page is accessible to users with the ADMIN or CUSTOMER role.</p>
      </div>
    </Layout>
  )
}