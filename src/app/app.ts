import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly skills = [
    'C#',
    '.NET',
    'RESTful APIs',
    'OOP',
    'PHP',
    'Laravel',
    'MySQL',
    'Git',
    'Linux Basics',
    'Java',
    'C++',
    'Network Security'
  ];

  protected readonly projects = [
    {
      name: 'Varnda',
      type: 'Real Estate Platform',
      description: 'Developed a property listing platform with dashboard access for admins, SEOs, and writers, plus a fast advertisement flow for users to publish property ads.'
    },
    {
      name: 'Readx',
      type: 'Library Management System',
      description: 'Built a library system with admin and user sections covering books, graduation projects, research, and exams for library users and administrators.'
    },
    {
      name: 'Clinic Management System',
      type: '.NET Project',
      description: 'A clinic management system project published on GitHub, focused on organizing healthcare workflows and clinic operations.',
      link: 'https://github.com/3bdomo/ClinicManagementSystem'
    }
  ];

  protected readonly training = [
    {
      name: '.NET Full Stack Development',
      provider: 'Information Technology Institute (ITI)',
      date: 'Jan 2026 - Jun 2026'
    },
    {
      name: 'PHP Web Developer Job Profile',
      provider: 'Digital Egypt Pioneers Initiative',
      date: 'Apr 2025 - Oct 2025'
    },
    {
      name: 'CCNA',
      provider: 'Cisco Systems via NTI',
      date: 'Network fundamentals'
    }
  ];
}
