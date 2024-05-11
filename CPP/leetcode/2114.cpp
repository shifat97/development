#include <bits/stdc++.h>
using namespace std;

int mostWordsFound(vector<string>& s) {
    int i = 1, max = 0;
    while (i <= s.size()) {
        int j = 1, space = 0;
        while (j <= s[i].size()) {
            if (s[i][j] == ' ') {
                space++;
            }
            j = j + 1;
        }
        if (space > max) max = space;
        i = i + 1;
    }

    return max+1;
}

int main() {
    vector<string> str = {"alice and bob love leetcode","i think so too","this is great thanks very much"};

    cout << mostWordsFound(str) << endl;

    return 0;
}