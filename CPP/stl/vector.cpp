#include<bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v;
    v.push_back(1);
    v.push_back(100);
    cout << v[1] << endl;

    vector<pair<int, int>> vec;
    vec.push_back({10, 12});
    vec.push_back({21, 22});
    cout << vec[0].second << endl;

    // Size of vector
    cout << vec.size() << endl;

    // Print vector via iterator
    vector<int>::iterator it = v.begin();
    cout << *it << endl;
    for(it = v.begin(); it != v.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;

    // Print vector via auto type
    for(auto it2 = v.begin(); it2 != v.end(); it2++) {
        cout << *it2 << " ";
    }
    cout << endl;

    // Print vector via foreach loop
    for(int k : v) {
        cout << k << " ";
    }
    cout << endl;

    // Erase item from vector
    vector<int> v3 = {10, 100, 20, 12, 23, 35};
    v3.erase(v3.begin() + 1);
    v3.erase(v3.begin() + 2, v3.begin() + 4);
    for(auto k : v3) {
        cout << k << " ";
    }
    cout << endl;

    // Insert at specific position
    vector<int> v4 = {1, 2, 3, 4, 5};
    v4.insert(v4.begin() + 1, 2);
    v4.insert(v4.end(), 2, 6);
    for(auto k : v4) {
        cout << k << " ";
    }
    cout << endl;

    cout << v4.empty() << endl;

    return 0;
}