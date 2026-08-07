import { Component, input, output } from '@angular/core';
import { Project } from '../projects/projects';

@Component({
  selector: 'app-project-modal',
  imports: [],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModal {
  project = input.required<Project>();
  closed = output<void>();
  next = output<void>();

  private techIcons: Record<string, string> = {
    CSS: '/icons/css.svg',
    HTML: '/icons/HTML.svg',
    Firebase: '/icons/Firebase.svg',
    Angular: '/icons/Angular.svg',
    TypeScript: '/icons/TypeScript.svg',
    JavaScript: '/icons/JavaScript.svg',
  };

  onClose(): void {
    this.closed.emit();
  }

  onNext(): void {
    this.next.emit();
  }

  getTechIcon(tech: string): string {
    return this.techIcons[tech] ?? '/icons/Rest-Api.svg';
  }
}
