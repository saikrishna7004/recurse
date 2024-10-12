import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((projectId) => (
                    <div key={projectId} className="p-4 border rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">Project {projectId}</h2>
                        <p className="mb-4">Description of project {projectId}.</p>
                        <Button asChild><Link href={`/projects/${projectId}`}>View Project</Link></Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;