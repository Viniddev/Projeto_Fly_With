import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-seletor-passageiros',
  templateUrl: './seletor-passageiros.component.html',
  styleUrls: ['./seletor-passageiros.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageirosComponent),
      multi: true,
    },
  ],
})
export class SeletorPassageirosComponent implements ControlValueAccessor {
  @Input() Seletor!: string;
  @Input() Description!: string;
  @Input() QuantidadeInicial!: number;

  value: number = 0;
  onChange = (val: number) => {};
  onTouch = () => {};

  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  incrementar() {
    this.value++;
    this.onChange(this.value);
    this.onTouch();
  }
  decrementar() {
    if (this.value > 0) {
      this.value--;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
