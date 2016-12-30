import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-movies-list-component',
    templateUrl: './filter-movies-list.component.html',
    styleUrls: ['./filter-movies-list.component.css']
})
export class FilterMoviesListComponent {
    @Output() onFilterTextChange: EventEmitter<string> = new EventEmitter<string>();

    filterText: string;

    filterTextChange() {
        this.onFilterTextChange.emit(this.filterText);
    }
}
