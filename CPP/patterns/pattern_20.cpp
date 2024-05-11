#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 1;

    while(i <= 2*n - 1) {
        int stars = i;

        if(i > n) 
            stars = 2*n - i;

        for(int j = 1; j <= stars; j++) {
            cout << "*";
        }

        for(int j = 1; j <= 2*n - 2*stars; j++) {
            cout << " ";
        } 

        for(int j = 1; j <= stars; j++) {
            cout << "*";
        }
        
        cout << endl;
        i = i + 1;
    }

    return 0;
}