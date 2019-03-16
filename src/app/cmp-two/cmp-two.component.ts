import {
    Component,
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    SimpleChanges
} from "@angular/core";

@Component({
    selector: "app-cmp-two",
    templateUrl: "./cmp-two.component.html",
    styleUrls: ["./cmp-two.component.css"]
})
export class CmpTwoComponent
    implements
        OnInit,
        OnChanges,
        AfterViewInit,
        AfterViewChecked,
        AfterContentInit,
        AfterContentChecked {
    constructor() {
        console.info("CmpTwoComponent constructor");
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log("CmpTwoComponent ngOnInit");
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log("CmpTwoComponent ngOnChanges");
    }
    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        console.log("CmpTwoComponent ngAfterViewChecked");
    }
    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log("CmpTwoComponent ngAfterViewInit");
    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log("CmpTwoComponent ngAfterContentInit");
    }
    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        console.log("CmpTwoComponent ngAfterContentChecked");
    }
}
