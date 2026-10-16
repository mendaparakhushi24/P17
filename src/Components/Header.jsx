export default function Header({ totalStudents }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center
          rounded-2xl bg-violet-600 text-2xl text-white shadow-lg
          shadow-violet-200">
          🎓
        </div>

        <div>
          <h1 className="text-xl font-extrabold text-slate-900">
            StudentHub
          </h1>
          <p className="text-xs text-slate-500">
            Student Directory Management
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-violet-100
        bg-white px-4 py-2.5">
        <span className="text-sm font-semibold text-violet-700">
          {totalStudents} Students
        </span>
      </div>
    </header>
  );
}