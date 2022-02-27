def maximumUnits(boxTypes,truckSize):

        # Sort the input 2D array
        #units will be sorted in decreasing order
        # So Example 2 becomes like this: [[5,10], [3,9], [4,7], [2,5]] 

    boxTypes = sorted(boxTypes, key = lambda x:x[1],reverse = True)
        # Create 2 separate variables to keep track of total number of units and current Upper limit
    result = 0
    limit = 0

    for i in range(len(boxTypes)):

		# Adds this checker first, so that if adding ALL units of the current type exceeds truckSize
		# we only add as many boxes as we can and stop traversing
        if limit + boxTypes[i][0] > truckSize:
            final = truckSize - limit
            result += final * boxTypes[i][1]
            break
        result += boxTypes[i][0] * boxTypes[i][1]
        limit += boxTypes[i][0]
    return result

size = int(input("enter no. of boxtypes  : ")) 
boxTypes = []
for x in range(size):
    boxTypes.append([int(y) for y in input("No.of boxes and unitPerBox :").split()])
print(boxTypes)
truckSize = int(input("enter truck size here :  "))
print(maximumUnits(boxTypes,truckSize))


   
        

        
      
