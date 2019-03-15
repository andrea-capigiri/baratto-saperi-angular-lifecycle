import {
    Component,
    OnInit,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnChanges,
    SimpleChanges
} from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <p>Hi</p>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent implements
        OnInit, OnChanges,
        AfterViewInit, AfterViewChecked,
        AfterContentInit, AfterContentChecked {
    
    constructor() {
        console.info("AppComponent constructor");
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('AppComponent ngOnInit');
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log('AppComponent ngOnChanges');
    }
    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        console.log('AppComponent ngAfterViewChecked');
    }
    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log('AppComponent ngAfterViewInit');
    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log('AppComponent ngAfterContentInit');
    }
    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        console.log('AppComponent ngAfterContentChecked');
    }
}
