import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  cards = [
    {title: 'Incredible Experience', body: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.', author: 'Anya Tailor Joy', job: 'CEO, SF Industires', url: 'assets/img/profile.png'},
    {title: 'Dependable, Responsive, Professional Partner', body: 'Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations.', author: 'Sri Alam', job: 'CEO, Membagongkan GROUP', url: 'assets/img/profile.png'},
    ]
}
