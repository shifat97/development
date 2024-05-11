#include<bits/stdc++.h>
using namespace std;

int main() {
    // LIFO
    stack<int> st;
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(3);

    cout << st.top() << endl;
    cout << st.size() << endl;
    cout << st.empty() << endl;
    st.pop();

    return 0;
}