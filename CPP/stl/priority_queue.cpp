#include<bits/stdc++.h>
using namespace std;

int main() {
    // Maximum heap
    priority_queue<int> pq;
    pq.push(5);
    pq.push(2);
    pq.push(8);
    pq.push(3);

    cout << pq.top() << endl;

    // Minimum heap
    priority_queue<int, vector<int>, greater<int>> pq2;
    pq2.push(5);
    pq2.push(2);
    pq2.push(8);
    pq2.push(10);

    cout << pq2.top() << endl;

    return 0;
}