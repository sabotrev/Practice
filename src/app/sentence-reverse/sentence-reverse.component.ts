import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence-reverse',
  templateUrl: './sentence-reverse.component.html',
  styleUrls: ['./sentence-reverse.component.css']
})
export class SentenceReverseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.reverseWords([
      'f', 'u', 'n', ' ',
      'm', 'u', 'c', 'h', ' ',
      's', 'o', ' ',
      'i', 's', ' ',
      'c', 'o', 'd', 'i', 'n', 'g'
    ]));
  }

  private reverseWords(arr: Array<string>) {
    arr = this.reverse(arr, 0, arr.length - 1);

    const wordBondary: Array<number> = [];
    let isLastSpace: Boolean = true;

    for (let i = 0; i < arr.length; i++) {
      const isCurSpace = arr[i] === ' ';

      if (isLastSpace && !isCurSpace) {
        wordBondary.push(i);
      } else if (!isLastSpace && isCurSpace) {
        wordBondary.push(i - 1);
      }

      isLastSpace = isCurSpace;
    }

    for (let i = 0; i < wordBondary.length; i += 2) {
      let endIndex = wordBondary[i + 1];

      if (endIndex === undefined) {
        endIndex = arr.length - 1;
      }

      arr = this.reverse(arr, wordBondary[i], endIndex);
    }

    return arr;
  }

  private reverse(arr: Array<string>, startIndex: number, endIndex: number): Array<string> {

    while (startIndex < endIndex) {
      const temp = arr[startIndex];
      arr[startIndex] = arr[endIndex];
      arr[endIndex] = temp;
      startIndex ++;
      endIndex --;
    }

    return arr;
  }
}
