#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; 
    cin >> n;
    int point[n];

    for(int i = 0; i < n; i++) {
        cin >> point[i];
    }
    
    int count = 0;
    for(int i = 1; i < 5; i++) {
        int j = i - 1;
        int max = point[0];
        int min = point[0];

        while(j >= 0) {
            if (point[j] > max) {
                max = point[j];
            } if (point[j] < min) {
                min = point[j];
            }
            
            j = j - 1;
        }

        if (point[i] > max || point[i] < min) 
            count++;
        
    }

    cout << count << endl;

    return 0;
}