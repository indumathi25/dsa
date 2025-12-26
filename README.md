DSA:
=====
Sorted Increasing order - > [2, 4, 8, 12]  a[I+1] > a[I]
Sorted decreasing order -> [12, 9, 8, 7, 5]  a[I+1] < a[I]

Sorted Non decreasing order -> [1, 2, 3, 3, 3, 4, 4, 5, 8, 9] -> It can have duplicates
Non decreasing -> duplicates in Increasing order 
a[i+1] >= a[I]   

If you find in-place in question then we shouldn’t create a new array instead you have the change the existing array

Remove Duplicates:
[0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4,4 ]

We can use 2 pointers 
X 1 -> find out all unique elements by traversing through the array.
I 2 -> maintain where the elements to be placed
 
function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return (x+1); //Gives the number of unique elements
}
removeDuplicates([1, 2, 2, 3, 4, 4])

Remove Elements:
Example: 1  [3,2,2,3]
Val = 3
Output should be  2, nums=[2,2,..] 

Example 2: [0,1, 2,2, 3, 0 , 4, 2]
val=2
Output should be 5, nums=[0,1,3,0,4, …]

Solution:
We can use 2 pointer techniques 

var removeElement = function(nums, val) {
    let x=0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] != val){
            nums[x] = nums[i]
            x=x+1
        }
    }
    return x;
};

Reverse string:
Example: [I, n, d, u, m, a, t, h, i]
O/p: [I,h,t,a,m,u,d,n,i]

Formula: swap(0, n-1), swap(1, n-2) …swap(I, n-1-i)

var reverseString = function(s) {
    const lengthOfS = s.length;
    const halfOfS = Math.floor(lengthOfS/2);
    for(let i=0; i<halfOfS; i++) {
        const temp = s[i]
        s[i] = s[lengthOfS-1-i]
        s[lengthOfS-1-i] = temp;
    }
};


Best Time to Buy and sell stocks:
Brute force approach: We will try to find out all the possible ways of buy and sell and then we check what is the max profit that we can get. But its a bad way of solving the problem and it gives o(n^2) - Time complexity
               0  1  2  3  4  5
prices = [7, 1, 5, 3, 6, 4]

prices[i] is the price of a given stock on the ith day.

We need o iterate 2 times so o(n^2) - Time complexity

Better solution:
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] < min){
            min = prices[i];
        }
        const temp = prices[i] - min
        if(temp > max) {
            max = temp;
        }
    }
    return max
};





