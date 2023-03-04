import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  terms = [
    {url: 'assets/icons/circle.svg', title: "Enviromental Law", body: "Environmental legal issues might occur since the planned business activities are designed"},
    {url: 'assets/icons/bag.svg', title: "Corporate and Commercial", body: "We provide a complete range of services for the continuity of your business activities."},
    {url: 'assets/icons/rocket.svg', title: "Information and Technology", body: "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty."},
    {url: 'assets/icons/user-arrows.svg', title: "Other Services", body: "In dealing with disruptive economic and legal challenge, our firm also provide various legal services."},
    
  ];
}
