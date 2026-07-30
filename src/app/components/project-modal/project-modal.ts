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

  onClose(): void {
    this.closed.emit();
  }

  onNext(): void {
    this.next.emit();
  }
}
