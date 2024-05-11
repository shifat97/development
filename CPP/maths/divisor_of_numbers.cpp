#include<bits/stdc++.h>
using namespace std;

int main() {
    int number;
    cin >> number;
    int i = 1;
    vector<int> divisors;

    while (i <= number) {
        if(number % i == 0) {
            divisors.push_back(i);
        }
        i = i + 1;
    }

    for(auto i : divisors) {
        cout << i << endl;
    }

    return 0;
}