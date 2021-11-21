function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*(Number(a)+Number(b));
    this.area = a*b
}