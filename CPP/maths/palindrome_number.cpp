#include<bits/stdc++.h>
using namespace std;

// The reverse of the number is same as the original number is call palindrome.
string reverse2(int number) {
    int reverse = 0;
    int copy = number;

    while (number != 0) 
    {
        int last = number % 10;
        number = number / 10;
        reverse = (reverse * 10) + last;
    }

    if(reverse == copy) 
        return "true";

    return "false";
}

int main() {
    int number;
    cin >> number;

    cout << reverse2(number) << endl;

    return 0;
}