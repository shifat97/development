#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;
    char c = 'E';

    while(i <= n) {
        char ch = c - i + 1;
        while (ch <= 'E') {
            cout << ch;
            ch = ch + 1;
        }
        cout << endl;
        i = i + 1;
    }

    return 0;
}