import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatInputModule, MatLabel } from '@angular/material/input';

@Component({
    selector: 'app-input',
    imports: [MatInputModule, MatLabel, FormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';

  @Input() label: string = '';

  @Input() type: string = 'text';

  value: string | null = null;

  touched: boolean = false;

  disabled: boolean = false;

  private onChange: any = (value: any) => {};
  private onTouched!: () => {};

  public writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
