#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;
    int space = 2 * (n - 1);

    while (i <= n) {
        for(int j = 1; j <= i; j++) {
            cout << j;
        }

        for(int j = 1; j <= space; j++) {
            cout << " ";
        }

        for(int j = i; j >= 1; j--) {
            cout << j;
        }

        cout << endl;
        space = space - 2;
        i = i + 1;
    }

    return 0;
}