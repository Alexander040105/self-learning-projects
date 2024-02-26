global number_list 
number_list = []



def create_list():
    global number_list
    new_arr_input = input('Make a list of numbers to add (Should be separated by comma): ')
    new_arr = [numbers.strip() for numbers in new_arr_input.split(',')]    
    number_list = number_list + new_arr
    total = sum(int(number) for number in number_list)
    print(total)
    
def create_list2():
    global number_list
    new_arr_input = input('Make a list of numbers to add (Should be separated by comma): ')
    new_arr = [numbers.strip() for numbers in new_arr_input.split(',')]    
    number_list = number_list + new_arr
    total = sum(int(number) for number in number_list)
    print(total / len(number_list))


create_list2()
            