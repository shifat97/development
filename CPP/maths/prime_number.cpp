#include<bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    bool is_prime = true;

    for (int i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            is_prime = false;
            break;
        }
    } 

    cout << is_prime << endl;

    return 0;
}