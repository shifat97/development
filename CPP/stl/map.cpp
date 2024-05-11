#include<bits/stdc++.h>
using namespace std;

int main() {
    map<int, string> s;
    s.insert({1, "John"});
    s.insert({2, "Doe"});
    s.insert({3, "Snow"});

    for(auto it : s) {
        cout << it.first << " " << it.second << endl;
    }

    cout << s.empty() << endl;

    return 0;
}