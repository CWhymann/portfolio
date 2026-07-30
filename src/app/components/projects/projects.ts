import { Component, signal } from '@angular/core';
import { ProjectModal } from '../project-modal/project-modal';

export interface Project {
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
  imports: [ProjectModal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      number: '01',
      title: 'Join',
      techStack: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'],
      githubUrl: 'https://github.com/CWhymann/join',
      liveUrl: 'https://example.com/join',
      previewImage: 'img/join-preview.png',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/CWhymann/el-pollo-loco',
      liveUrl: 'https://example.com/el-pollo-loco',
      previewImage: 'img/el-pollo-loco-preview.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
    {
      number: '03',
      title: 'DA Bubble',
      techStack: ['Angular', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com/CWhymann/da-bubble',
      liveUrl: 'https://example.com/da-bubble',
      previewImage: 'img/da-bubble-preview.png',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    },
  ];

  hoveredProject = signal<Project | null>(null);
  activeProject = signal<Project | null>(null);

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

  openModal(project: Project): void {
    this.activeProject.set(project);
  }

  closeModal(): void {
    this.activeProject.set(null);
  }

  nextProject(): void {
    const current = this.activeProject();
    if (!current) return;
    const index = this.projects.indexOf(current);
    const next = this.projects[(index + 1) % this.projects.length];
    this.activeProject.set(next);
  }
}
