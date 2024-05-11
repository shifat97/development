#include<bits/stdc++.h>
using namespace std;

int main() {
    int number;
    cin >> number;

    while (number != 0) {
        int last = number % 10;
        cout << last << endl;
        number = number / 10;
    }

    return 0;
}