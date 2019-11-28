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
    let sx = JSON.stringify(x);
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
    this.randodArr = JSON.stringify(this.createIt());
    this.strungDis = strungGoal;
    console.log('final(?) iter', iter);    
    console.log('outside of while', this.randodArr);
  }
  
  getDiff(arr: any[], b, a): number {
    return arr[b] - arr[a];
  }

  
}
