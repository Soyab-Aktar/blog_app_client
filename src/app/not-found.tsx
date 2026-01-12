import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-600 tracking-tight">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-linear-to-r from-slate-400 to-slate-600"></div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-slate-800 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital wilderness.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-slate-500 animate-pulse delay-150"></div>
        </div>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Return Home
        </Link>

        {/* Optional: Subtle background pattern */}
        <div className="fixed inset-0 -z-10 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(71 85 105) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>
      </div>
    </div>
  )
}