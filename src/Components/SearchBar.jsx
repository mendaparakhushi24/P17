export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border
      border-slate-200 bg-white px-4 shadow-sm transition
      focus-within:border-violet-400 focus-within:ring-4
      focus-within:ring-violet-100">
      <span className="text-xl text-slate-400">⌕</span>

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search students by name or email..."
        aria-label="Search students"
        className="w-full bg-transparent py-3.5 text-sm
          text-slate-800 outline-none placeholder:text-slate-400"
      />

      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="text-sm font-semibold text-violet-600"
        >
          Clear
        </button>
      )}
    </div>
  );
}