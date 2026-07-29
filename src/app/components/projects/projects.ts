import { Component, signal } from '@angular/core';

interface Project {
  number: string;
  title: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  previewImage: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      number: '01',
      title: 'Join',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/DEIN-USERNAME/join',
      liveUrl: 'https://example.com/join',
      previewImage: '/img/join-preview.png',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/DEIN-USERNAME/el-pollo-loco',
      liveUrl: 'https://example.com/el-pollo-loco',
      previewImage: '/img/el-pollo-loco-preview.png',
      description: 'Jump, run and throw game based on object-oriented approach.',
    },
    {
      number: '03',
      title: 'DA Bubble',
      techStack: ['Angular', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com/DEIN-USERNAME/da-bubble',
      liveUrl: 'https://example.com/da-bubble',
      previewImage: '/img/da-bubble-preview.png',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration.',
    },
  ];

  hoveredProject = signal<Project | null>(null);

  setHovered(project: Project): void {
    this.hoveredProject.set(project);
  }

  clearHovered(): void {
    this.hoveredProject.set(null);
  }

  hoveredIndex(): number {
    const project = this.hoveredProject();
    return project ? this.projects.indexOf(project) : 0;
  }
}
