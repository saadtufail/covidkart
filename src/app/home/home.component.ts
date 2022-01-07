import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor( private meta: Meta, private title: Title) {
        this.meta.addTags([
            {name: 'description', content: ' Home page of SEO friendly app.'},
            {name: 'author', content: ' Angular Covid 19 Web App.'},
            {name: 'keywords', content: ' Angular, Angular Covid 19 Web App'},
        ]);
        this.setTitle('Home Page')
     }
     public setTitle( newTitle: string) {
         this.title.setTitle(newTitle);
     }

    ngOnInit() {}
}
