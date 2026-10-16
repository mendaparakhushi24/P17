
import { useCallback, useEffect, useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import StudentList from "./Components/StudentList";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Unable to load students. Please try again.");
      }
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchStudents(controller.signal);

    return () => controller.abort();
  }, [fetchStudents]);

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-600 to-purple-600 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
            Student Information System
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Student Directory
          </h2>

          <p className="mt-3 max-w-xl text-indigo-100">
            Retrieve student records from a dummy API,
            explore contact information, and search records.
          </p>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Students</p>
            <h3 className="mt-2 text-3xl font-extrabold text-indigo-700">
              {students.length}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Records from API
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Search Results</p>
            <h3 className="mt-2 text-3xl font-extrabold text-violet-700">
              {filteredStudents.length}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Matching records
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Data Source</p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-800">
              REST API
            </h3>
            <p className="mt-2 text-sm text-emerald-600">
              ● JSONPlaceholder
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              All Students
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Browse student details below.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <SearchBar search={search} setSearch={setSearch} />

            <button
              onClick={() => fetchStudents(new AbortController().signal)}
              disabled={loading}
              className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Loading..." : "↻ Refresh"}
            </button>
          </div>
        </div>

        {loading && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
            <p className="mt-4 font-semibold text-slate-700">
              Fetching student records...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl bg-red-50 p-8 text-center text-red-700">
            <p className="text-lg font-bold">{error}</p>
            <button
              onClick={() => fetchStudents(new AbortController().signal)}
              className="mt-4 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <StudentList students={filteredStudents} />
        )}

        <footer className="mt-12 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          StudentHub · React + Fetch API + Tailwind CSS
        </footer>
      </main>
    </div>
  );
}
