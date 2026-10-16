import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  if (students.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed
        border-slate-200 bg-white px-5 py-14 text-center">
        <div className="text-4xl">🔍</div>
        <h3 className="mt-4 font-bold text-slate-800">
          No students found
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Try searching with another name or email address.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {students.map((student, index) => (
        <StudentCard
          key={student.id}
          student={student}
          index={index}
        />
      ))}
    </div>
  );
}