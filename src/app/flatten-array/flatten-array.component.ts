import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flatten-array',
  templateUrl: './flatten-array.component.html',
  styleUrls: ['./flatten-array.component.css']
})
export class FlattenArrayComponent implements OnInit {

  private twoDimArray: Array<Array<Number>> = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  public twoDimFlat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public twoDisplay: String = JSON.stringify(this.twoDimArray);
  private multiDimArray: Array<any> = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]];
  public multiDisplay: String = JSON.stringify(this.multiDimArray);

  public reduceFunction: String = `
    var newArray = twoDimArray.reduce(function(prev, curr) { <br>
      &emsp; return prev.concat(curr); <br>
    });
  `;
  public loopingFunction: String = `
    var newArray = [];<br>
    for (var i=0; i < twoDimArray.length; i++) { <br>
      &emsp; for (var j=0; j < twoDimArray.length; j++) { <br>
        &emsp; &emsp; newArray.push(twoDimArray[i][j]) <br>
      &emsp; }<br>
    }
  `;
  public stackFunction: String = `
    var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]]; <br>
    function flatten(input) { <br>
      &emsp; const stack = [...input]; <br>
      &emsp; const res = []; <br>
      &emsp; while (stack.length) { <br>
        &emsp; &emsp; // pop value from stack <br>
        &emsp; &emsp; const next = stack.pop(); <br>
        &emsp; &emsp; if (Array.isArray(next)) { <br>
          &emsp; &emsp; &emsp; // push back array items, won't modify the original input <br>
          &emsp; &emsp; &emsp; stack.push(...next); <br>
      &emsp; &emsp; } else { <br>
        &emsp; &emsp; &emsp; res.push(next); <br>
      &emsp; &emsp; } <br>
      &emsp; } <br>
      &emsp; //reverse to restore input order <br>
      &emsp; return res.reverse(); <br>
    }
  `;
  public recursiveFunction: String = `
    function flattenDeep(arr1) { <br>
      &emsp; return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []); <br>
    }
  `;

  constructor() { }

  ngOnInit() {
    // Concat & apply
    const newArray1 = [].concat.apply([], this.twoDimArray);

    // Reduce
    const newArray2 = this.twoDimArray.reduce(function(prev, curr) {
      return prev.concat(curr);
    });

    // Looping
    const newArray3 = [];
    for (let i = 0; i < this.twoDimArray.length; i++) {
      for (let j = 0; j < this.twoDimArray.length; j++) {
        newArray3.push(this.twoDimArray[i][j]);
      }
    }

    // Spread
    const newArray4 = [].concat(...this.twoDimArray);

    // Stack
    function flatten(input) {
      const stack = [...input];
      const res = [];
      while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
          // push back array items, won't modify the original input
          stack.push(...next);
        } else {
          res.push(next);
        }
      }
      // reverse to restore input order
      return res.reverse();
    }

    // Recursive
    function flattenDeep(input) {
      return input.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }
  }

}
