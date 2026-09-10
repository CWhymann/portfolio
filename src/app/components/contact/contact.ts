import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Translation } from '../../core/translation';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form: FormGroup;
  submitted = signal(false);
  success = signal(false);

  constructor(
    private fb: FormBuilder,
    public translation: Translation,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue],
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }

  async onSubmit(): Promise<void> {
    this.submitted.set(true);

    if (this.form.valid) {
      const formData = new FormData();

      formData.append('access_key', '07d6dcc3-6c33-4ae9-8139-e6195c679dc8');
      formData.append('name', this.form.value.name);
      formData.append('email', this.form.value.email);
      formData.append('message', this.form.value.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        this.success.set(true);
        this.form.reset();
        this.submitted.set(false);
      }
    }
  }
}
