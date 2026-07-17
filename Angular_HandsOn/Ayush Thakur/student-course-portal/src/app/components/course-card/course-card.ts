import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCardComponent implements OnChanges {
  @Input() course: any;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('course changed', changes['course']?.previousValue, changes['course']?.currentValue);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Getters keep templates clean by keeping conditional logic in TypeScript.
  get cardClasses() {
    return {
      'card--enrolled': this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderStyle() {
    let color = 'grey';
    if (this.course?.gradeStatus === 'passed') color = 'green';
    else if (this.course?.gradeStatus === 'failed') color = 'red';
    return { 'border-left': `5px solid ${color}` };
  }
}
