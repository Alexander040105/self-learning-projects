todo_list = []



def main():
    user_choice = input('Input 1 for add, Input 2 for remove, and Input 3 for showing your to-do list: ')
    
    if int(user_choice) == 1:
        add_list()
    elif int(user_choice) == 2:
        remove_list()
    elif int(user_choice) == 3:
        show_list()

def add_list():
    print('Note, you can add up to 10 items only')
    user_add = input('Put something on your to-do list: ')
    todo_list.append(user_add)
    main()

def remove_list():
    print('Note, you will only input from 1-10')
    user_remove = input('Remove something from your to-do list: ')
    
    if int(user_remove) == 1:
        todo_list.remove(0)
        
    elif int(user_remove) == 2:
        todo_list.remove(1)
        
    elif int(user_remove) == 3:
        todo_list.remove(2)
        
    elif int(user_remove) == 4:
        todo_list.remove(3)
        
    elif int(user_remove) == 5:
        todo_list.remove(4)
        
    elif int(user_remove) == 6:
        todo_list.remove(5)
        
    elif int(user_remove) == 7:
        todo_list.remove(6)
        
    elif int(user_remove) == 8:
        todo_list.remove(7)
        
    elif int(user_remove) == 9:
        todo_list.remove(8)
        
    elif int(user_remove) == 10:
        todo_list.remove(9)
        
def show_list():
    item_number = len(todo_list)
    
    if int(item_number) < 10:
        print("Here is your to-do lists: ")
        
        for word in todo_list:
            print(todo_list)
        
        print('Your to-do list has some space to store it has ' + item_number)
    else:
        print("Here is your to-do lists: " + todo_list)
        for word in todo_list:
            print(todo_list)
        print('Your to-do list is full')
        
main()

for i in range(100):         
    main()

