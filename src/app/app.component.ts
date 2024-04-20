import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appProjects, appSkills } from './data';
import { Skill } from './model/skill.interface';
import { Project } from './model/project.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  skills: Skill[] = appSkills;
  projects: Project[] = appProjects;
  isSubmitted: boolean = false;

  contact = {
    name: '',
    email: '',
    message: '',
  };

  makeAllDirty(form: NgForm) {
    form.control.markAllAsTouched()
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
    if (contactForm.valid) {
      this.isSubmitted = true;
      console.log(this.contact);
    } else {
      this.makeAllDirty(contactForm)
    }
  }
}
