import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects, Testimonials, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
