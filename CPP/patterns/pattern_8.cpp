#include <iostream>
using namespace std;

int main() {
    int n; 
    cin >> n;
    int i = 1;

    while (i <= n) {
        for(int j = 1; j <= i-1; j++) {
            cout << " ";
        }
        for(int j = 1; j <= 2*n-(2*i-1); j++) {
            cout << "*";
        }
        for(int j = 1; j <= i-1; j++) {
            cout << " ";
        }
        cout << endl;
        i = i + 1;
    }

    return 0;
}