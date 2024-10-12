const getProjectData = (id) => {
    const projects = {
        '1': {
            name: 'CodeCollab',
            description: `
                CodeCollab is a platform for collaborative coding that allows multiple users to work on code in real-time. 
                It features syntax highlighting, code suggestions, and integrated chat for seamless communication.
                Users can create rooms for specific projects and invite others to join.
            `,
            link: 'https://example.com/codecollab',
            image: 'https://picsum.photos/800/400?random=1',
        },
        '2': {
            name: 'BugBuster',
            description: `
                BugBuster is an AI-driven tool designed to help developers identify and fix bugs in their code more efficiently. 
                It analyzes code patterns and suggests potential fixes, saving time and reducing frustration.
                The tool integrates with popular IDEs for easy access.
            `,
            link: 'https://example.com/bugbuster',
            image: 'https://picsum.photos/800/400?random=2',
        },
        '3': {
            name: 'LearnWithMe',
            description: `
                LearnWithMe is an interactive learning platform where users can take coding challenges and earn badges as they progress. 
                It offers a wide range of challenges from beginner to advanced levels, along with detailed solutions and explanations.
            `,
            link: 'https://example.com/learnwithme',
            image: 'https://picsum.photos/800/400?random=3',
        },
    };
    return projects[id] || null;
};

const ProjectPage = ({ params }) => {
    const { id } = params;

    const project = getProjectData(id);

    if (!project) {
        return <div className="text-center mt-10">Project not found.</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-[800px] rounded-lg shadow-lg text-lg">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.name}</h1>
            <img src={project.image} alt={project.name} className="w-full h-auto rounded-lg mb-4" />
            <div className="text-gray-700 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">Visit Project</a>
        </div>
    );
};

export default ProjectPage;
