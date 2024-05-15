letterInput = input("Enter a letter: ")
vowels = ['a','e','i','o','u']

if letterInput.isalpha() == True:
    if letterInput in vowels:
        print("The letter " + letterInput + " is a vowel")
    else:
        print("The letter " + letterInput + " is a consonant")
else:
    print("Invalid input!!!")