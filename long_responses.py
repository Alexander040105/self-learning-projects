import random


# list of responses of the bot towards the 10 questions
def ai_answers():
    response = [
    ]
    return response


# list of responses of the bot if the question is not related to motorcycles
def unknown():
    response = [
    ][random.randrange(4)]
    return response


# list of responses of the bot if the question is related to motorcycle but not on his library of facts
def unknown_ai():
    response = [
    ][random.randrange(2)]
    return response
