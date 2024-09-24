'use client'
import Layout from '@/components/Layout'

export default function DriverPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Driver Page</h1>
        <p>This page is accessible to users with the ADMIN or DRIVER role.</p>
      </div>
    </Layout>
  )
}