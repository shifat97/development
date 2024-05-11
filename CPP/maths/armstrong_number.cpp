#include<bits/stdc++.h>
using namespace std;

// The sum of the digits is the actual number itself is call armstrong number
string reverse2(int number) {
    int sum = 0;
    int copy = number;

    while (number != 0) 
    {
        int last = number % 10;
        number = number / 10;
        sum = sum + (last * last * last);
    }

    if(sum == copy) 
        return "true";

    return "false";
}

int main() {
    int number;
    cin >> number;

    cout << reverse2(number) << endl;

    return 0;
}