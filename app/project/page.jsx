import { Suspense } from "react";
import ProjectDisplay from "./ProjectDisplay";

export default function ProjectPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ProjectDisplay />
    </Suspense>
  );
}
