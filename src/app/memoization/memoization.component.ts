import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoization',
  templateUrl: './memoization.component.html',
  styleUrls: ['./memoization.component.css']
})
export class MemoizationComponent implements OnInit {

  ngOnInit() {
    let fib: any;

    fib = this.memo(function(n) {
      if (n < 2) {
        return 1;
      } else {
        // We'll console.log a loader every time we have to recurse
        console.log('loading...');
        return fib(n - 2) + fib( n - 1);
      }
    });

    fib(5);

    console.log('break');

    fib(5);
  }

  memo(func) {
    const cache = {};
      return function() {
        const key = JSON.stringify(arguments);
        if (cache[key]) {
          console.table(cache);
          return cache[key];
        } else {
          const val = func.apply(null, arguments);
          cache[key] = val;
          return val;
        }
    };
  }



}
