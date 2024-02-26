import random

pick = ["bato", 'papel', 'gunting']
iteration = 0
def play():
    user_pick = input('Choose you pick(bato, papel o gunting): ')
    ai_pick = random.choice(pick)
    print('The pick of the AI is ' + ai_pick)

    if user_pick.lower() == pick[0] and ai_pick.lower() == pick[1]:
        print('You Lose noob')
    elif user_pick.lower() == pick[1] and ai_pick.lower() == pick[2]:
        print('You Lose Noob')
    elif user_pick.lower() == pick[0] and ai_pick.lower() == pick[2]:
        print('You Win')
    elif user_pick.lower() == pick[0] and ai_pick == pick[0]:
        print('Tied Bitch')
    elif user_pick.lower() == pick[1] and ai_pick == pick[1]:
        print('Tied Bitch')
    elif user_pick.lower() == pick[2] and ai_pick == pick[2]:
        print('Tied Bitch')
    else:
        print('You Win')


while iteration < 100:
    play()
    
    




