#include <bits/stdc++.h>
using namespace std;

string palindrome(int n) {
    int reverse = 0;
    int m = n;

    while (n > 0) {
        int last = n % 10;
        n = n / 10;
        reverse = (reverse * 10) + last;
    }

    if(reverse == m) return "Yes";

    return "No";
}

int main() {
    int t;
    cin >> t;
    int i = 1;

    while (t != 0) {
        int n;
        cin >> n;
        cout << "Case " << i << ": " << palindrome(n) << endl;
        t = t - 1;
        i = i + 1;
    }

    return 0;
}