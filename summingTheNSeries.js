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

Also, I was trying to see if there was a way to
square things using bitwise artithmatic and this was the best
I came up with so far
def summingSeries(n):
    if n%2 ==0:
        #return ((2*n)*(n/2))%(1000000007)
        return (n<<1)*(n>>1)%1000000007
    else:
        m=n-1
        return ((m<<1)*(m>>1)+((n<<1)-1))%(1000000007)
*/

