#include<bits/stdc++.h>
using namespace std;

int main() {
    // FIFO
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);

    cout << q.back() << endl;

    q.back() += 3;

    cout << q.back() << endl;

    cout << q.front() << endl;

    cout << q.empty() << endl;

    return 0;
}