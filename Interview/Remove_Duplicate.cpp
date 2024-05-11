#include <bits/stdc++.h>
using namespace std;

// remove duplicate via new array
void removeDuplicateViaNewArray()
{
    int arr[] = {1, 1, 2, 2, 3, 3};
    int length = end(arr) - begin(arr);
    vector<int> ans;
    for (int i = 0; i < length; i++)
    {
        bool found = false;
        for (int j = 0; j < ans.size(); j++)
        {
            if (arr[i] == ans[j])
            {
                found = true;
                break;
            }
        }

        if (!found)
        {
            ans.push_back(arr[i]);
        }
    }

    for (int number : ans)
    {
        cout << number << " ";
    }
    cout << endl;
}

// remove duplicate via same array
void removeDuplicateViaSameArray()
{
    int arr[] = {1, 1, 2, 2, 3, 3};
    int length = end(arr) - begin(arr);
    int current_index = 1;
    for (int i = 1; i < length; i++)
    {
        if (arr[i] != arr[i - 1])
        {
            arr[current_index] = arr[i];
            current_index++;
        }
    }

    for (int i = 0; i < current_index; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    removeDuplicateViaNewArray();
    removeDuplicateViaSameArray();

    return 0;
}