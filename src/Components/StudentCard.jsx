const avatarColors = [
  "bg-violet-100 text-violet-700",
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-pink-100 text-pink-700",
];

export default function StudentCard({ student, index }) {
  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="group rounded-2xl border border-slate-100
      bg-white p-5 shadow-sm transition duration-300
      hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-14 w-14 shrink-0 items-center
          justify-center rounded-2xl text-lg font-extrabold
          ${avatarColors[index % avatarColors.length]}`}>
          {initials}
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1
          text-xs font-semibold text-emerald-700">
          ● Active
        </span>
      </div>

      <h3 className="mt-5 break-words text-lg font-extrabold
        text-slate-900 group-hover:text-violet-700">
        {student.name}
      </h3>

      <p className="mt-1 break-all text-sm text-slate-500">
        @{student.username}
      </p>

      <div className="mt-5 space-y-4 border-t border-slate-100 pt-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5">✉️</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase
              tracking-wide text-slate-400">
              Email
            </p>
            <p className="mt-1 break-all text-sm text-slate-700">
              {student.email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5">📞</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase
              tracking-wide text-slate-400">
              Phone
            </p>
            <p className="mt-1 break-words text-sm text-slate-700">
              {student.phone}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5">📍</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase
              tracking-wide text-slate-400">
              Address
            </p>
            <p className="mt-1 break-words text-sm leading-5 text-slate-700">
              {student.address.street}, {student.address.city}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5">🏢</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase
              tracking-wide text-slate-400">
              Company
            </p>
            <p className="mt-1 break-words text-sm text-slate-700">
              {student.company.name}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-violet-50 px-4 py-3">
        <p className="text-xs text-violet-500">Student Record</p>
        <p className="mt-1 font-bold text-violet-800">
          STU-{String(student.id).padStart(3, "0")}
        </p>
      </div>
    </article>
  );
}