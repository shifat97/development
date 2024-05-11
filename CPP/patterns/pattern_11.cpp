#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;

    while (i <= n) {
        int start, j = 1;
        if (i % 2 == 0)
            start = 0;
        else 
            start = 1;
        while(j <= i) {
            cout << start << " ";
            start = 1 - start;
            j = j + 1;
        }
        cout << endl;
        i = i + 1;
    }

    return 0;
}