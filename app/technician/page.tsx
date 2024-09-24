'use client'
import Layout from '@/components/Layout'

export default function TechnicianPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Technician Page</h1>
        <p>This page is accessible to users with the ADMIN or TECHNICIAN role.</p>
      </div>
    </Layout>
  )
}