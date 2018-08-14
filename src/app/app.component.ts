import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'G-REKENING CALCULATOR';
  public grekeningForm: 0;
  public subtotal: number;
  public userinput: number;
  public selectedTaxType: number;
  public gtotal: number;
  public copyTotal: string;
  public isCopied: boolean;

  public taxCodes = [
    {name: 'NL-HOOG', taxvalue: 0.21},
    {name: 'NL-LAAG', taxvalue: 0.06},
    {name: 'NL-NUL', taxvalue: 0.00}
  ];

  selected($event): void {
    console.log($event.target.value);
    this.selectedTaxType = $event.target.value;
  }

  clear(): void {
    this.subtotal = null;
    this.userinput = null;
    this.gtotal = null;
  }

  calculate(): void {
    // TODO: FORM VALIDATIE
    this.gtotal = (this.subtotal) * (this.userinput / 100) + (this.selectedTaxType * this.subtotal);
    console.log(this.selectedTaxType);
    console.log(this.gtotal);
  }
  copyToClipboard(): void {
    this.copyTotal = this.gtotal.toString(10);
  }
}
