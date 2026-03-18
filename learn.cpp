#include <iostream>
using namespace std;

int main() {

int T;

int odd=0;
int even=0;
int oddpairs = 0;
int evenpairs = 0;
cin>>T;
int x;
for(int i=0; i<T; i++) {
    int N;
    cin>>N;
    for(int j=0; j<N; j++) {
        cin>>x;
        if(x % 2 == 0) 
            even++;
        
        else 
            odd++;
        
        oddpairs = (odd *(odd-1)) / 2;
        evenpairs = (even *(even-1)) / 2;
        

    }
            cout<<oddpairs+evenpairs;

}

    return 0;
}