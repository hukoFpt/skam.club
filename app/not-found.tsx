// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
}
