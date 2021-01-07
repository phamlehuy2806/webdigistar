import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'webdigistarorg-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {

    // public show:boolean = false;
    // public buttonName:any = 'Show';
    constructor() { }

    ngOnInit(): void {
    }

    // toogle(){
    //     this.show = !this.show;
    //     if(this.show)
    //         this.buttonName = 'Hide';
    //     else 
    //         this.buttonName = 'Show';
    // }

}