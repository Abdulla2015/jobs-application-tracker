import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Job Application Tracker</h1>
      <p className="text-lg mb-8">Next.js + Convex + Better Auth Setup Complete!</p>
      <div className="space-y-4">
        <Link href="/api/auth/signin" className="block">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Sign In
          </button>
        </Link>
        <div className="text-sm text-gray-600 mt-8">
          <p>Convex URL: https://earnest-rat-517.convex.cloud</p>
          <p>GitHub: https://github.com/Abdulla2015/jobs-application-tracker</p>
        </div>
      </div>
    </main>
  )
}