var Calculator = (function () {
    function Calculator() {
        this.box = document.getElementById('display');
    }
    Calculator.prototype.set = function (num) {
        if (this.box.getAttribute('value') == '') {
            if (num == '+' || num == '-' || num == '*' || num == '/') {
                return;
            }
        }
        this.box.setAttribute('value', this.box.getAttribute('value') + num);
        if (num == 'C') {
            this.box.setAttribute('value', '');
        }
    };
    Calculator.prototype.decimal = function (dec) {
        var display = document.getElementById("display");
        var i = 0;
        for (i; i < display.value.length; i++) {
            if (display.value.charAt(i) == '.') {
                return;
            }
        }
        display.setAttribute('value', this.box.getAttribute('value') + dec);
    };
    Calculator.prototype.calculate = function () {
        if (this.box.getAttribute('value') == '') {
            return;
        }
        else {
            var x = this.box.getAttribute('value');
            x = eval(x);
            this.box.setAttribute('value', x);
        }
    };
    Calculator.prototype.power = function (y) {
        var x = this.box.getAttribute('value');
        x = Math.pow(x, y);
        this.box.setAttribute('value', x);
    };
    Calculator.prototype.backspace = function () {
        var num = this.box.getAttribute('value');
        var len = num.length - 1;
        var newnum = num.substring(0, len);
        this.box.setAttribute('value', newnum);
    };
    return Calculator;
}());
var obj = new Calculator();
