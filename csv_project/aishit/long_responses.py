import random
import csv

def ai_answers():
    response = []
    with open('D:\\63947\\Documents\GitHub\\First-Year-Assignments-Projects\\self-learning\\csv_project\\response_sheet.csv', 'r', newline='') as csvfile:
        csv_reader = csv.reader(csvfile)
        for row in csv_reader:
            response.append(row[0]) 
            
    return response





# list of responses of the bot towards the 10 questions



# list of responses of the bot if the question is not related to motorcycles
def unknown():
    response = [
        "I'm sorry, I am only programmed to talk about topics related to AI Ethics",
        "I am sorry, but I only talk about AI Ethics",
        "I am sorry, I cannot answer this question since it is not on my dataset",
        "i am sorry, but please ask questions related to AI Ethics",
    ][random.randrange(4)]
    return response


# list of responses of the bot if the question is related to motorcycle but not on his library of facts
def unknown_ai():
    response = [
        "I'm sorry, but this question regarding to AI Ethics is not on my dataset",
        "I am sorry, but I am still expanding my knowledge regarding this kinds of topics regarding AI ethics",
    ][random.randrange(2)]
    return response


