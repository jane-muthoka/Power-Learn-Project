###
#Submit a github repo link for the assignment below




#Create an empty list called my_list.
my_list= []
#Append the following elements to my_list: 10, 20, 30, 40.
list=[10,20,30,40]
my_list.append(list)
print(my_list)
#Insert the value 15 at the second position in the list.
#my_list.insert(1,15)
my_list[0].insert(1, 15)
print(my_list)
#Extend my_list with another list: [50, 60, 70].
another_list=[50,60,70]
my_list[0].extend(another_list)
print(my_list)
#Remove the last element from my_list.
del my_list(-1)
print(my_list)
#Sort my_list in ascending order.
#my_list.sort()
# Find and print the index of the value 30 in my_list.
index_30 = my_list.index(15)
print("Index of 30 in my_list:", index_30)

# Print the modified my_list.
print("Modified my_list:", my_list)

