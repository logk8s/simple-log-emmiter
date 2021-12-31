import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageGeneratorService {
  messages: string[];
  constructor() {
    this.messages = [
      "Culpa mollit labore nostrud officia id minim anim reprehenderit magna officia qui magna cillum ipsum adipisicing occaecat adipisicing incididunt culpa sint ut elit eiusmod voluptate ipsum laboris.",
      "Nostrud laborum id enim adipisicing dolore deserunt sint fugiat dolor minim velit et ipsum ea duis minim non magna consectetur incididunt sunt proident consequat cupidatat laboris dolor tempor officia minim occaecat nisi in laborum pariatur labore officia et excepteur.",
      "Esse ullamco ut enim do ea sit velit commodo ut id pariatur ut minim fugiat amet ex dolor minim dolor.",
      "Ex do sunt irure in quis laboris excepteur minim quis consectetur sint ex nostrud proident irure nulla amet aute Lorem.",
      "Sit exercitation id occaecat velit labore eu labore aute mollit voluptate ad voluptate aute Lorem esse exercitation exercitation anim aute.",
      "Officia aliquip esse qui veniam officia laborum ipsum nostrud velit irure voluptate nulla voluptate amet consequat eiusmod dolore qui deserunt excepteur.",
      "Consequat aliqua dolor ut incididunt aliquip velit do sit ad adipisicing mollit excepteur fugiat velit eu magna non do incididunt quis magna aliqua irure irure dolor nostrud ullamco irure pariatur ut.",
      "Sit commodo aliqua consectetur dolor dolor sint est mollit quis voluptate Lorem magna cillum excepteur ex est ad amet sit eu ea dolor minim esse quis non proident.",
      "Eiusmod incididunt eiusmod minim excepteur in aliquip ipsum Lorem officia excepteur reprehenderit ut sit nisi consequat adipisicing dolor Lorem eiusmod dolor ea aliqua enim consequat ut amet aliquip aute deserunt reprehenderit non do ad laboris dolore excepteur.",
      "Nisi sint velit ullamco enim amet sit incididunt velit id non Lorem duis commodo deserunt sit cupidatat ut excepteur est.",
      "Reprehenderit dolore officia nostrud eu veniam Lorem et eu eiusmod enim aute ipsum duis excepteur officia sint incididunt consequat nisi eu nostrud aliqua duis duis et sit laboris commodo laborum.",
      "Adipisicing mollit duis irure aliqua sit sunt non et tempor eu Lorem veniam qui exercitation adipisicing adipisicing in eiusmod est ex sint ad voluptate incididunt in.",
      "Irure ullamco veniam sunt sit reprehenderit eiusmod ipsum dolore in est tempor voluptate officia fugiat consequat ea enim minim esse excepteur excepteur.",
      "Exercitation officia dolor minim qui et tempor tempor duis minim magna ex dolore nulla adipisicing pariatur laboris incididunt dolore velit laborum ea laboris occaecat nulla.",
      "Est eu elit laborum amet eiusmod sunt nulla nostrud est consequat ipsum in laboris non officia sunt ea tempor adipisicing non proident cupidatat commodo pariatur dolore enim proident excepteur exercitation excepteur labore aute ullamco magna non dolore proident qui.",
      "Occaecat ea tempor eiusmod qui adipisicing quis cillum enim laboris qui occaecat esse duis magna id magna voluptate voluptate quis labore laboris consequat ea sit culpa commodo velit laboris et elit ex duis anim esse sunt do amet adipisicing.",
      "Ea nisi qui do ullamco irure ut ea commodo sint non occaecat velit laborum nulla enim ea nulla non pariatur deserunt mollit pariatur pariatur exercitation ut deserunt laborum occaecat deserunt consectetur cupidatat ut sint officia irure sit cupidatat in magna.",
      "Aliquip aute ad laborum Lorem fugiat pariatur amet voluptate sit pariatur laboris consequat id eiusmod deserunt veniam adipisicing culpa duis proident eu sit laborum sunt sunt sint.",
      "Quis irure excepteur ipsum nostrud tempor nulla esse excepteur magna amet sit minim veniam ad et id laborum voluptate voluptate culpa amet consequat.",
      "Nisi reprehenderit elit exercitation aliquip culpa est ipsum in nisi labore proident occaecat nulla magna et ullamco velit consequat eu ut sunt ut exercitation laboris deserunt Lorem dolor incididunt ullamco sint laborum laboris exercitation proident.",
    ]
    // var iterator = this.generateLogMessage();

    // setInterval(function () {
    //   console.log(iterator.next().value)
    // }, 1000);
  }

  *generateLogMessage() {
    var i = 0;
    const length = this.messages.length
    while(true) {
        yield this.messages[i++ % length]
    }
  }
}
