#include <bits/stdc++.h>
using namespace std;

template <typename T>
void debug(T value) {
    cout << "DEBUG:: " << value << endl;
}

void printName(string name) {
    cout << "Hey, " << name << endl;
}

void doSomething(string &s) {
    s[0] = 't';
    cout << s << endl;
}

int main() {
    string name;
    cin >> name;
    printName(name);

    string s = "raj";
    doSomething(s);
    cout << s << endl;

    int n;
    cin >> n;
    int i = 1;
    
    while(i <= n) {
        cout << i << " ";
        debug(i);
        i = i + 1;
    }

    return 0;
}