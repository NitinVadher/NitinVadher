class freefire {
  constructor(redcriminal, bluecriminal,yellowcriminal,purpalcriminal) {
    this.redcriminal = redcriminal;
    this.bluecriminal = bluecriminal;
    this.yellowcriminal = yellowcriminal;
    this.purpalcriminal = purpalcriminal;
  }
}

class freefiremax extends freefire{
    constructor(redcriminal, bluecriminal, yellowcriminal, purpalcriminal,ghostcriminal)
    {
        super(redcriminal, bluecriminal, yellowcriminal, purpalcriminal)
        this.ghostcriminal = ghostcriminal;
    }
} 
var old = new freefire("1", "2", "3", "4");
var h = new freefiremax("1","2","3","4","5")

console.log(old)
console.log(h);
