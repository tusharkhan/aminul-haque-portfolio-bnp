import { ReactNode } from 'react';

export default function ProgramCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 h-10 w-10 text-red-700">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-red-700">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}


