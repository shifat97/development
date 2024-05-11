#include <bits/stdc++.h>
using namespace std;

vector<int> leftRightDifference(vector<int>& nums) {
    vector<int> left_sum;
    vector<int> right_sum;
    vector<int> result;

    for (int i = 0; i < nums.size(); i++) {
        int sum = 0;
        for (int j = i + 1; j < nums.size(); j++) {
            if (i == nums.size() - 1) {
                sum = 0;
                break;
            }
            sum = sum + nums[j];
        }
        right_sum.push_back(sum);
    }

    for (int i = 0; i < nums.size(); i++) {
        int sum = 0;
        for (int j = 0; j < i; j++) {
            sum = sum + nums[j];
        }
        left_sum.push_back(sum);
    }

    for (int i = 0; i < nums.size(); i++) {
        result.push_back(abs(left_sum[i] - right_sum[i]));
    }

    return result;
}

int main () {
    vector<int> v = {10,4,8,3};
    vector<int> res = leftRightDifference(v);

    for (auto r : res) cout << r << " ";
    cout << endl;

    return 0;
}