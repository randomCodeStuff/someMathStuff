/* This problem was unfair! lol
https://www.hackerrank.com/challenges/summing-the-n-series/problem
Why? Because I SOLVED it, but when I submitted my answer
in Javascript it didn't work!
I observed that the answer was n squared aka (n*n)%1000000007
so I gave in and looked at the solution, which aslo
stated the answer was that so I was like wtf?
So I submitted the same thing in Python and it worked...
*/
function summingSeries(n) {
  return (n * n) % 1000000007;
}
/*But in python submitting this works just fine...
def summingSeries(n):
    return (n*n)%1000000007

So, is there something specific to Javascript maybe about large numbers
this isn't working properly? :)
*/
