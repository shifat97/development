#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;

    while(i <= n) {
        int j = 1;
        char c = 'A';

        for(int k = 1; k <= n - i; k++) {
            cout << " ";
        }

        while (j <= 2*i-1) {
            cout << c;
            if(c == 'A')
                c = 'B';
            else 
                c = 'A';
            j = j + 1;
        }

        for(int k = 1; k <= n - i; k++) {
            cout << " ";
        }   

        cout << endl;
        i = i + 1;
    }

    return 0;
}