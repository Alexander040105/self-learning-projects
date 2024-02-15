questions_list = []
answers_list = []
increment = 0

def adding_items():
    user_addQues = input('Put a question here for player number 2: ')
    user_addAns = input('Put a answer here to check the answers of player number 2: ')
    questions_list.append(user_addQues)
    answers_list.append(user_addAns)
    
def player_two():
    print(questions_list[0])
    user_answer = input("")
    
    if user_answer.lower() == answers_list[0].lower():
        print('You are correct!')
    else:
        print('You are wrong')
        

while increment < 5:
    adding_items()

print('The number of questions are ' + len(questions_list))
print('The number of answers are ' + len(answers_list))