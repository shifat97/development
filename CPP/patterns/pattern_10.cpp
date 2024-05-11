#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;

    while(i <= 2*n-1) {
        int j = 1;
        int stars = i;

        if(i > n) 
            stars = 2*n - i;

        while(j <= stars) {
            cout << "*";
            j = j + 1;
        }
        cout << endl;
        i = i + 1;
    }

    return 0;
}