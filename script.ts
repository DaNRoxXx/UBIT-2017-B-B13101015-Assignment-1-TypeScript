class Calculator {

    constructor() {

    }

    box: any = document.getElementById('display');

    set(num: string) {
        if (this.box.getAttribute('value') == '') {
            if (num == '+' || num == '-' || num == '*' || num == '/') {
                return;
            }
        }
        this.box.setAttribute('value', this.box.getAttribute('value') + num);

        if (num == 'C') {
            this.box.setAttribute('value', '');
        }
    }

    decimal(dec: number): void {

        let display: any = document.getElementById("display");
        let i: number = 0;

        for (i; i < display.value.length; i++) {
            if (display.value.charAt(i) == '.') {
                return;
            }
        }

        display.setAttribute('value', this.box.getAttribute('value') + dec);
    }

    calculate(): void {
        if (this.box.getAttribute('value') == '') {
            return;
        } else {
            var x = this.box.getAttribute('value');
            x = eval(x);
            this.box.setAttribute('value', x);
        }
    }

    power(y: number): void {
        var x = this.box.getAttribute('value');
        x = Math.pow(x, y);
        this.box.setAttribute('value', x);
    }

    backspace(): void {
        var num = this.box.getAttribute('value');
        var len = num.length - 1;
        var newnum = num.substring(0, len);
        this.box.setAttribute('value', newnum);
    }

}

let obj = new Calculator();
