global kpop_arr 
kpop_arr = ['STAYC', 'TWICE', 'BTS', 'NEW JEANS', 'QWER', '(G)I-DLE']
rerun = True


def add():
    global kpop_arr
    add_kpop = input('Add another kpop group/artist: ')
    kpop_arr.append(add_kpop)
    print(kpop_arr)
    stop()
    print('')


def delete():
    global kpop_arr
    remove_kpop = int(input('Select index to remove: '))
    if 0 <= remove_kpop < len(kpop_arr):
        kpop_arr.pop(remove_kpop)
        print(kpop_arr)
    else:
        print('Invalid index. Please enter a valid index.')
    stop()
    print('')


def stop():
    stop_program = input('Do you want to rerun?(Y/N): ')
    if stop_program.lower() == 'n':
        rerun == False
        exit()
    else:
        main()

def modify():
    global kpop_arr
    index_modify = input('Enter the index you want to modify: ')
    new_value = input('Enter the new value for the index: ')
    
    kpop_arr[int(index_modify)] = new_value
    print(kpop_arr)
    stop()
    print('')

def main():  
    global kpop_arr
    
    def combine():
        global kpop_arr
        new_arr_input = input('Add new set of Kpop idols/artists (Should be separated by comma): ')
        new_arr = [artist.strip() for artist in new_arr_input.split(',')]    
        print('List of Kpop idols/artists:', new_arr)
        kpop_arr = kpop_arr + new_arr
        print(kpop_arr)
        stop()
    
    
    print('| 1 - ADD')
    print('| 2 - DELETE')
    print('| 3 - MODIFY')
    print('| 4 - COMBINE')
    print("--------------")
    print(kpop_arr)
    
    user_input = input('Select a number of choice: ')
    
    if user_input == '1':
        add()
    elif user_input == '2':
        delete()
    elif user_input == '3':
        modify()
    elif user_input == '4':
        combine()
    
    
while rerun == True:
    main()