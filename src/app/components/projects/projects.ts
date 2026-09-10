import { Component, signal } from '@angular/core';
import { ProjectModal } from '../project-modal/project-modal';
import { Translation } from '../../core/translation';

export interface Project {
  number: string;
  title: string;
  key: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  previewImage: string;
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
      key: 'join',
      techStack: ['CSS', 'HTML', 'Supabase', 'Angular', 'TypeScript'],
      githubUrl: 'https://github.com/CWhymann/join',
      liveUrl: 'https://cwhymann.github.io/join/',
      previewImage: 'img/join-preview.png',
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      key: 'elPolloLoco',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/CWhymann/el-pollo-loco',
      liveUrl: 'https://cwhymann.github.io/el-pollo-loco/',
      previewImage: 'img/el-pollo-loco-preview.png',
    },
    {
      number: '03',
      title: 'DA Bubble',
      key: 'daBubble',
      techStack: ['Angular', 'Supabase', 'TypeScript'],
      githubUrl: 'https://github.com/CWhymann/da-bubble',
      liveUrl: 'https://example.com/da-bubble',
      previewImage: 'img/da-bubble-preview.png',
    },
  ];

  hoveredProject = signal<Project | null>(null);
  activeProject = signal<Project | null>(null);

  constructor(public translation: Translation) {}

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
