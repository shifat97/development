#include<bits/stdc++.h>
using namespace std;

int main() {
    set<int> s;
    s.insert(120);
    s.insert(100);
    s.insert(150);

    // Return s.end() -> 3
    auto it = s.find(130);
    cout << *it << endl;

    int target = 140;
    string s1 = "Not found";
    for(auto it = s.begin(); it != s.end(); it++) {
        if(*it == target) {
            s1 = "Found";
            break;
        }
    }
    cout << s1 << endl;

    for(auto k : s) {
        cout << k << " ";
    }
    cout << endl;

    s.erase(150);

    for(auto k : s) {
        cout << k << " ";
    }
    cout << endl;

    cout << s.empty() << endl;

    return 0;
}