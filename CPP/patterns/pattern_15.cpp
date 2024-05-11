#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;

    while(i <= n) {
        char c = 'A';
        int j = 1;
        while(j <= n-i+1) {
            cout << c;
            c = c + 1;
            j = j + 1;
        }
        cout << endl;
        i = i + 1;
    }

    return 0;
}