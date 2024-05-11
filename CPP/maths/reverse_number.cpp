#include<bits/stdc++.h>
using namespace std;

// Reverse the number
string reverse(int number) {
    string reverse = "";

    while (number != 0) 
    {
        int last = number % 10;
        reverse = reverse + to_string(last);
        number = number / 10;
    }             

    return reverse;
}

// Reverse the number without leading 0
int reverse2(int number) {
    int reverse = 0;

    while (number != 0) 
    {
        int last = number % 10;
        number = number / 10;
        reverse = (reverse * 10) + last;
    }

    return reverse;
}

int main() {
    int number;
    cin >> number;
    
    cout << reverse(number) << endl;
    cout << reverse2(number) << endl;

    return 0;
}