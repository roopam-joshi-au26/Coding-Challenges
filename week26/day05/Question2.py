def climbStairs(n):
#here we are declaring steps with empty dictionary
    steps = dict()
    
#then we iterate and storing the 1 step and 2 step values in dictionary !
    for i in range(1,n+1):
        if i == 1:
            steps[i] = 1
        elif i == 2:
            steps[i] =2
        else:
            steps[i]= steps[i-1] + steps[i-2]
    return steps[n]  

n = int(input("enter the steps :"))  
print("There are",climbStairs(n),"Way's to climb the top !")        
        