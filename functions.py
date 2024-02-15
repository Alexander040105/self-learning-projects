def inch_to_cm(inches):
    cm = 2.4
    result = float(inches) * float(cm)
    print('The result is ' + str(result))

def area_of_circle(radius):
    pi = 3.1416
    result = (float(radius)**2) * pi
    print('The result is ' + str(result))

def byte_to_bits(byte):
    bits = 8
    result  = float(byte) * float(bits)
    print('The result is ' + str(result))
    
def transpo_fare(km):
    print("[R] Regular fare")
    print("[D] Discounted Fare for students/senior citizens/disabled persons.")
    print('[C] Close')
    user_choice = input("Enter your choice: ")
    minimum_fare = 8.0
    minimum_km = 5.0
    discount_rate =  8.0 * 0.8
    discount_km_rate =  1.0 * 0.8
    additional_km_rate = 1
    user_input_km = km

    def calculating_fare():
        if km  <= 5:
            print("Here's your fare rate: " + str(minimum_fare))
        elif km <= 5 and user_choice.lower() =='d':
            print("Here's your discounted fare rate: "+ str(discount_rate))
        elif km > 5:
            calculation = (user_input_km - minimum_km) * discount_km_rate + discount_rate 
            print("Here's your discounted fare rate: " + str(calculation))
        else:
            calculation = (user_input_km - minimum_km) * additional_km_rate + minimum_fare
            print("Here's your fare rate: " + str(calculation))   
    
    if user_choice.lower() == 'r':
        calculating_fare()


def main():
    user_response = input("""Choose between the following: inch to cm, area of circle, byte to bits, fare: """)
    if user_response.lower() == "inch to cm":
        inch = input("Enter the inch that you want to convert: ")
        inch_to_cm(float(inch))
    elif user_response.lower() == 'area of circle':
        r = input("Enter the radius of the circle: ")
        area_of_circle(r)
    elif user_response.lower() == 'byte to bits':
        bytes = input('Enter the number of bytes: ')
        byte_to_bits(bytes)
    elif user_response.lower() == 'fare':
        km_distance = input('Enter the travel distance: ')
        transpo_fare(km_distance)