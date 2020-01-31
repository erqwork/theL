import { Component, OnInit } from '@angular/core';

import { dirty } from '../assets/dirty';
import { toSeventy } from '../assets/dirtierStill';
import { updated } from '../assets/Updating/updating';
import { toSeventyFive } from '../assets/secondGame';
import { toFiftySix } from '../assets/dirtyTwo';
import { firstSet } from '../assets/firstSet';
import { secondSet } from '../assets/secondSet';
import { thirdSet } from '../assets/thirdSet';
import { fourthSet } from '../assets/fourthSet';
import { fifthSet } from '../assets/fifthSet';
import { sixthSet } from '../assets/sixthSet';
import { first } from '../assets/Updating/upFirstSet';
import { second } from '../assets/Updating/upSecondSet';
import { third } from '../assets/Updating/upThirdSet';
import { fourth } from '../assets/Updating/upFourthSet';
import { fifth } from '../assets/Updating/upFifthSet';
import { sixth } from '../assets/Updating/upSixthSet';
import * as FD from '../assets/Differences/firstDiffs.json';
import * as SD from '../assets/Differences/secondDiffs.json';
import * as TD from '../assets/Differences/thirdDiffs.json';
import * as FthD from '../assets/Differences/fourthDiffs.json';

import { numbs } from '../assets/numbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public trashIter: any;
  public todaysLuckies: number[];
  public firstNums = [];
  public secondNums = [];
  public thirdNums = [];
  public fourthNums = [];
  public fifthNums = [];
  public sixthNums = [];

  // Options
  public highsLowsModesOpts: any = {};
  public occsOpts: any = {};
  public diffOpts: any = {};

  // Smallest numbers in each set
  public firstSmallest: number;
  public secondSmallest: number;
  public thirdSmallest: number;
  public fourthSmallest: number;
  public fifthSmallest: number;
  public sixthSmallest: number;

  // Largest numbers in each set
  public firstLargest: number;
  public secondLargest: number;
  public thirdLargest: number;
  public fourthLargest: number;
  public fifthLargest: number;
  public sixthLargest: number;

  // Modes
  public firstMode: any[];
  public secondMode: any[];
  public thirdMode: any[];
  public fourthMode: any[];
  public fifthMode: any[];
  public sixthMode: any[];

  // Occurences
  public firstOccs: {};
  public secondOccs: {};
  public thirdOccs: {};
  public fourthOccs: {};
  public fifthOccs: {};
  public sixthOccs: {};
  public stringOcc: string;

  // Differences
  public firstDiffs = [];
  public secondDiffs = [];
  public thirdDiffs = [];
  public fourthDiffs = [];

  public totalsArr = [];
  public percentArr = [];

  public calcdTotals = [];
  public calcdPercs = [];
  public allNumbs: any;
  
  public seventyArr: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]; 
  public goalArr: number[] = [16,18,28,33,67,14];
  public randodArr:any = [];
  public strungDis: any;
  public shiftedSeventy: any;
  public updated: number[][];
  public combinedArrs: any[];

  public viewArr: any;

  constructor() {};

  ngOnInit() {
    this.todaysLuckies = this.createIt();
    this.combinedArrs = updated;
    // this.viewArr = this.createNewIndivdiualSet(this.combinedArrs, 5);  

    this.combinedArrs.forEach(arrSet => {
      this.thirdDiffs.push( this.getDiff(arrSet, 3, 2) );
      this.fourthDiffs.push( this.getDiff(arrSet, 4, 3) );      
    });
    
    // let x = document.getElementById('ta');
    // let numbObj = JSON.parse(numbs);
        
    // this.allNumbs = numbObj;
    // this.trashIter = toSeventy;
    // let numOfGames = toSeventy.length;

    // this.calcdTotals = numbObj.firstDigits.totals;
    // this.calcdPercs = numbObj.firstDigits.percentages;
        
    // Find and assign - Smallest
    this.firstSmallest = Math.min(...first);
    this.secondSmallest = Math.min(...second);
    this.thirdSmallest = Math.min(...third);
    this.fourthSmallest = Math.min(...fourth);
    this.fifthSmallest = Math.min(...fifth);
    this.sixthSmallest = Math.min(...sixth);
    
    // Find and assign - Largest
    this.firstLargest = Math.max(...first);
    this.secondLargest = Math.max(...second);
    this.thirdLargest = Math.max(...third);
    this.fourthLargest = Math.max(...fourth);
    this.fifthLargest = Math.max(...fifth);
    this.sixthLargest = Math.max(...sixth);

    // Find and assign - Modes
    this.firstMode = this.findMode(first);
    this.secondMode = this.findMode(second);
    // this.findMod(second);
    this.thirdMode = this.findMode(third);
    this.fourthMode = this.findMode(fourth);
    this.fifthMode = this.findMode(fifth);
    this.sixthMode = this.findMode(sixth);

    // Find and assign - Occurences
    this.sixthOccs = this.findOccurences(sixth);
    this.stringOcc = JSON.stringify(this.sixthOccs);  

    // Assign options
    this.highsLowsModesOpts = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Highest, Lowest, and Modes'
      },
      credits: {
        enabled: false
      },      
      xAxis: {
        categories: ['[0]', '[1]', '[2]', '[3]', '[4]', '[5]']
      },
      yAxis: {
        min: 0,
        max: 70,
        title: {
          text: 'Possible numbers'
        }
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      series: [        
        {
          name: 'highest',
          data: [40, 59, 66, 68, 70, 25],
          pointPadding: 0.1,
          color: 'rgba(255,128,85,1)'
        }
        ,{
          name: 'mode',
          data: [1,17,31,42,70,10],
          pointPadding: 0.2,
          color: 'rgba(128,255,85,1)'
        }
        ,{
          name: 'lowest',
          data: [1, 2, 4, 8, 18, 1],
          pointPadding: 0.3,
          color: 'rgba(128,85,255,1)'
        }
        
      ]
    }   

    this.occsOpts = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Occurences'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.seventyArr
      },
      yAxis: {
        min: 0,
        max: 20,
        title: {
          text: 'Numbers of time each number appears'
        }
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      series: [              
        {
          name: 'first digit',
          data: [20, 14, 13, 12, 7, 5, 8, 11, 5, 13, 7, 5, 4, 9, 4, 6, 5, 2, 1, 3, 3, 1, 1, 3, 2, 0, 1, 5, 3, 0, 1, 0, 2, 2, 0, 0, 0, 0, 1, 1],
          pointPadding: 0.2,
          color: '#393D2C'
        }
        ,{
          name: 'second digit',
          data: [0, 2, 2, 2, 2, 4, 3, 3, 2, 6, 4, 5, 5, 7, 5, 8, 9, 3, 3, 3, 1, 9, 4, 8, 5, 5, 0, 8, 6, 6, 3, 4, 5, 6, 2, 3, 5, 6, 0, 1, 3, 2, 1, 1, 2, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
          pointPadding: 0.22,
          color: '#2DC1B7'
        }
        ,{
          name: 'third digit',
          data: [0,0,0,1,1,0,0,0,0,1,2,1,2,2,3,1,0,3,1,3,4,4,5,2,4,4,3,5,4,7,10,6,3,5,2,3,6,3,11,7,5,5,3,4,2,4,5,3,2,0,4,2,4,1,3,1,2,4,0,1,3,1,1,0,0,1],
          pointPadding: 0.24,
          color: '#9FDFC7'
        }        
        ,{
          name: 'fourth digit',
          data: [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,2,0,1,2,0,3,1,0,2,1,1,1,2,4,5,2,2,1,2,7,1,3,2,10,8,5,1,7,4,9,7,2,1,2,4,8,1,8,3,2,5,7,6,10,2,6,6,3,2,2],
          pointPadding: 0.26,
          color: '#CE986A'
        }
        , {
          name: 'fifth digit',
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,2,2,3,2,2,2,1,4,4,4,1,4,2,1,3,3,8,8,10,6,6,11,7,10,5,10,11,13,10,17],
          pointPadding: 0.28,
          color: '#E14A38'
        }
      ]
    }   

    this.diffOpts = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Differences'
      },
      credits: {
        enabled: false
      },     
      plotOptions: {        
        series: {
          label: {
              connectorAllowed: false
          }
        }
      },
      series: [        
        {
          name: 'first & second digits',
          data: FD.differences,
          color: 'rgba(255,85,85,1)'
        },
        {
          name: 'second & third digits',
          data: SD.differences,
          color: 'rgba(255,128,85,1)'
        },
        {
          name: 'third & fourth digits',
          data: TD.differences,
          lineColor: 'rgba(128,255,85,1)',
          color: 'rgba(128,255,85,0.5)',
        },
        {
          name: 'fourth & fifth digits',
          data: FthD.differences,
          lineColor: 'rgba(85,128,255,1)',
          color: 'rgba(85,128,255,0.5)'
        },
        
      ]
    }

  }

  createNewIndivdiualSet(arr: any, idx: number) {
    let blankArr = [];
    arr.forEach(ar => {
      blankArr.push(ar[idx]);
    });
    return blankArr;
  }

  findMode(arr: number[]) {   
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    let modes = []
    , count = []
    , i
    , number
    , maxIndex = 0;
 
    for (i = 0; i < arr.length; i += 1) {
        number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;  
  }

  findOccurences(arr: any) {    
    let x = arr.reduce((obj, b) => {
      obj[b] = ++obj[b] || 1;
      return obj;
    }, {});

    return x;
  }

  groupNumbers(someSet: []) {
    // Tens groups
    let ones = 0
    , teens = 0
    , twenties = 0
    , thirties = 0
    , forties = 0
    , fifties = 0
    , sixties = 0
    , seventy = 0;

    // This forEach determines how many time a number appears in its ten group
    // Replace the set to get the totals for the desired group
    // If looking at the sixth set, make sure to comment/uncomment the correct conditionals
    someSet.forEach(number => {

      if(number >= 1 && number <= 9) {
        ++ones;
      } else if(number >= 10 && number <= 19) {
        ++teens;
      // Uncomment the below conditional if getting totals for the sixth group
      // } else if(number >= 20 && number <= 25) {
      //   ++twenties;
      // } 
      } else if(number >= 20 && number <= 29) {
        ++twenties;
      } else if(number >= 30 && number <= 39) {
        ++thirties;
      } else if(number >= 40 && number <= 49) {
        ++forties;
      } else if(number >= 50 && number <= 59) {
        ++fifties;
      } else if(number >= 60 && number <= 69) {
        ++sixties;
      } else if(number == 70) {
        ++seventy;
      } 
      
    });

    // This line places all of the totals into an array. Used for sets 1-5, their range is 1-70
    // this.totalsArr = [ones, teens, twenties, thirties, forties, fifties, sixties, seventy];

    // This is for the sixth digit which is only 1-25
    // this.totalsArr = [ones, teens, twenties];

    // This takes the totals and divides them by the number of recorded games to give a percentage
    // They should be multiplied by 100 to look like a common percentage (xx.xx%)
    // this.totalsArr.forEach(ta => this.percentArr.push((ta/numOfGames).toFixed(4)));
  }  
  
  bigArrSeperator(arr: []) {
    // This forEach separates the numbers into their own arrays
    this.trashIter.forEach(numbs => {
      this.firstNums.push(numbs[0]);
      this.secondNums.push(numbs[1]);
      this.thirdNums.push(numbs[2]);
      this.fourthNums.push(numbs[3]);
      this.fifthNums.push(numbs[4]);
      this.sixthNums.push(numbs[5]);
    });
  }

  // Returns an array where first five digits are random, unique numbers between 1 and 70 sorted ascendingly
  // The sixth digit in the array is a random number, possibly not unique, between 1 and 25
  // (This is what creates new 'valid' array)
  createIt(): number[] {
    let seventyArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];  
    let filledArr = [];
    
    for (let i = 0; i < 5; i++) {        
      let firstFiveRando = Math.floor(Math.random() * ((seventyArr.length) - 0) + 0);    
      let pushNum = seventyArr[firstFiveRando];        
      filledArr.push(pushNum);
      
      let pushIdx = seventyArr.indexOf(pushNum);
      seventyArr.splice(pushIdx, 1);            
    }
    filledArr.sort((a, b) => a-b);
    
    let lastRando = Math.floor(Math.random() * (26-1) + 1);
    filledArr.push(lastRando);
      
    return filledArr;
  }
  
  sameArr(arrX, arrY) {
    return arrX.every(x => arrY.includes(x));
  }
  
  calcArrs() {
    const strungGoal = JSON.stringify(this.goalArr);
    let newRando = []
    let randoStrung: string; 
    let iter = 1;
    let x = [16, 18, 28, 33, 67, 14];
    let sx = x.toString();
    // do {
    //   newRando = this.createIt();
    //   randoStrung = JSON.stringify(newRando);
    //   iter++;
    //   if (iter%100000 === 0) {
    //     console.log(iter); 
    //     console.log('randoStrung inside dowhile:', randoStrung);
    //   }
    // } while (strungGoal !== randoStrung);
    iter++;
    this.randodArr = this.createIt().toString();
    this.strungDis = strungGoal;
    console.log('final(?) iter', iter);    
    console.log('outside of while', this.randodArr);
  }
  
  getDiff(arr: any[], b, a): number {
    return arr[b] - arr[a];
  }  
}
