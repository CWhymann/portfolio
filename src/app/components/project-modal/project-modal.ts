import { Component, input, output } from '@angular/core';
import { Project } from '../projects/projects';
import { Translation } from '../../core/translation';

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
    CSS: 'icons/css.on.svg',
    HTML: 'icons/html.on.svg',
    Supabase: 'icons/supabase.on.svg',
    Angular: 'icons/angular.on.svg',
    TypeScript: 'icons/ts.on.svg',
    JavaScript: 'icons/js.on.svg',
  };

  constructor(public translation: Translation) {}

  onClose(): void {
    this.closed.emit();
  }

  onNext(): void {
    this.next.emit();
  }

  getTechIcon(tech: string): string {
    return this.techIcons[tech] ?? 'icons/Rest-Api.svg';
  }
}
