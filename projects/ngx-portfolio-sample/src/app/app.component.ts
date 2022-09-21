import { Component } from '@angular/core';
import { Portfolio } from 'ngx-portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-portfolio-sample';
  portfolio: Portfolio = {
    intro: {
      name: 'Rohtash Sethi',
      profession: 'Senior Web Developer',
      email: 'rohtash.sethi@gmail.com',
      phoneNo: 9999783138,
      bio: [
        'Passionate Web Developer with 6+ years of experience in building & evolving web applications for diverse business industries.',
        'Specializes in developing responsive, secure and web accessible Single Page applications using Angular, TypeScript, JavaScript, ES6, jQuery, HTML5, CSS3, Bootstrap, GIT, Jenkins, SonarQube and etc.'
      ],
      avatarImage: 'rs_laptop_emoji.png'
    },
    skills: [
      { name: 'Angular', profociency: 80 },
      { name: 'TypeScript', profociency: 80 },
      { name: 'JavaScript (ES6)', profociency: 80 },
      { name: 'Jasmine', profociency: 70 },
      { name: 'HTML', profociency: 90 },
      { name: 'CSS', profociency: 80 },
      { name: 'SASS', profociency: 80 },
      { name: 'Git', profociency: 80 },
      { name: 'GitHub', profociency: 80 },
      { name: 'Python', profociency: 50 },
      { name: 'AWS', profociency: 40 },
      { name: 'Responsive Design', profociency: 100 },
      { name: 'Accessibility', profociency: 100 }
    ],
    workExperience: [
      {
        company: 'WatchGuard',
        designation: 'Senior Software Engineer',
        startDate: 'June, 2021',
        endDate: 'Present',
        logoImage: 'wg_logo.png',
        summary: [
          'Working as an R&D Engineer of cyber security products in WatchGuard.',
          'Leading the Web development of XDR product from Noida R&D centre.',
          'Leading the initiative of Unit Testing in all WatchGuard Angular libraries in Noida.',
          'Responsible for ensuring front-end code quality in Noida.',
          'Contributed to various features/products in WatchGuard Cloud.',
          'Developed new and improved existing reusable Angular components for WatchGuard Cloud design system.',
          'Learned AWS and Python for serverless REST API development in order to contribute in backend as needed.',
          'Enhanced hiring application for Noida Team.',
          'Key member in hiring & building Noida R&D team.',
          'Mentored interns and junior developers on front-end developement.',
          'Environment: Angular 11, TypeScript, HTML5, SASS, Jasmine, Serverless REST API, AWS S3, Jenkins, SonarQube, Artifactory, Snyk.'
        ]
      },
      {
        company: 'Nagarro',
        designation: 'Associate Staff Engineer',
        startDate: 'June, 2019',
        endDate: 'June, 2021',
        logoImage: 'nagarro_logo.png',
        summary: [
          'Contributed to a leading South African Bank.',
          'Evolved an In-app Notification Center which facilitated running sales & marketing campaigns free of cost to 7.5 million customers on the Online Banking and reduced weekly digital marketing expense by 70%. Moreover, gradually spiked the customer engagement, retention & lead conversion by 40%.',
          'Implemented a real-time Conversational Banking feature on the Private Banking which reduced service costs by 50%, improved the customer satisfaction by 20% and boosted sales by 25% from up-selling opportunities.',
          'Took initiative of Mentoring freshers on front-end development using Angular.',
          'Environment: Angular 7/8, TypeScript, HTML5, SASS, Jasmine, SignalR, ASP.NET WEB API, IIS.'
        ]
      },
      {
        company: 'TCS',
        designation: 'Systems Engineer',
        startDate: 'March, 2016',
        endDate: 'June, 2019',
        logoImage: 'tcs_logo2.jpg',
        summary: [
          'Contributed majorly to the Fortune 500 US based manufacturing industry clients.',
          'Conceptualized, proposed, developed, and deployed the solution to replace 25+ legacy labelling applications (deployed over separate servers) with an Angular framework based Unified Labelling Single Page Application which reduced the server cost by 25 times.',
          'Developed an AngularJS based Plant Maintenance application integrated with SAP System through OData Services which highly reduced the SAP license cost by 25 times.',
          'Developed Kiosk, Appointment booking calendar and Live Schedule dashboard integrated with ServiceNow in order to enhance the user experience and digitalize the internal IT Service Management and boosted the operations performance by 40%.',
          'Developed a Feedback Management System integrated with ServiceNow which accelerated customer feedbacks and raised customer satisfaction rate by 40%.',
          'Environment: Angular 7, TypeScript, JavaScript, jQuery, AngularJS 1.6, HTML5, CSS3, Bootstrap, Materialize, SignalR, IIS, MS SQL Server 2012.'
        ]
      }
    ]
  };

}
