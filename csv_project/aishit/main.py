# Alexander Jon S. Solis and Neo Anderson Sydney
# November 8, 2023
# Chatbot Activity

import re

import long_responses as long

print("Hello! I am GuardBot, I am here to answer your AI Ethics Questions")
print("")
print("")
print("How may I help you?")
print("")


def message_probability(
    user_message, recognised_words, user_response=False, required_words=[]
):
    message_certainty = 0
    has_required_words = True

    # Counts how many words are present in each predefined message
    for word in user_message:
        if word in recognised_words:
            message_certainty += 1

    # Calculates the percent of recognised words in a user message
    percentage = float(message_certainty) / float(len(recognised_words))

    # Checks that the required words are in the string
    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    # Must either have the required words, or be a single response
    if has_required_words or user_response:
        return int(percentage * 100)
    else:
        return 0


def check_all_messages(message):
    highest_prob_list = {}
    ai_related = False

    # Simplifies response creation / adds it to the dict
    def response(
        bot_response,
        list_of_words,
        user_response=False,
        required_words=[],
        ai_keywords=[
            "ai",
            "artificial intelligence",
            "machine learning",
            "intelligent machines",
            "machine learnings",
        ],
    ):
        nonlocal highest_prob_list
        nonlocal ai_related

        highest_prob_list[bot_response] = message_probability(
            message, list_of_words, user_response, required_words
        )

        # loop to check if the question is related to AI
        for word in message:
            if word in ai_keywords:
                ai_related = True

    # Responses -------------------------------------------------------------------------------------------------------

    # Bot greetings
    response(
        "Hello! I am GuardBot, I am here to answer your AI Ethics Questions",
        ["hello", "hi", "hey", "sup", "heyo", "kamusta", "annyeong", "konichiwa"],
        user_response=True,
    )

    # list of responses of the bot towards the 20 questions
    fact_lists = long.ai_answers()
    fact1 = fact_lists[0]
    fact2 = fact_lists[1]
    fact3 = fact_lists[2]
    fact4 = fact_lists[3]
    fact5 = fact_lists[4]
    fact6 = fact_lists[5]
    fact7 = fact_lists[6]
    fact8 = fact_lists[7]
    fact9 = fact_lists[8]
    fact10 = fact_lists[9]
    fact11 = fact_lists[10]
    fact12 = fact_lists[11]
    fact13 = fact_lists[12]
    fact14 = fact_lists[13]
    fact15 = fact_lists[14]
    fact16 = fact_lists[15]
    fact17 = fact_lists[16]
    fact18 = fact_lists[17]
    fact19 = fact_lists[18]
    fact20 = fact_lists[19]

    # making an array of possible words that users may use to trigger the chatbot's response
    required_words_fact1 = [
        "history",
        "ethics",
    ]

    required_words_fact3 = [
        "impact",
        "affect",
        "influence",
        "affects",
        "impacts",
        "influences",
    ]
    required_words_fact4 = [
        "jobs",
        "work",
        "works",
        "job",
        "employment",
        "maintain",
        "keep",
        "ai",
    ]
    required_words_fact5 = ["bias", "biases", "prejudice", "prejudices"]
    required_words_fact6 = [
        "risk",
        "risks",
    ]
    required_words_fact7 = [
        "ensure",
        "transparency",
        "decision",
        "making",
    ]
    required_words_fact8 = [
        "ethical",
        "guidelines",
        "for",
        "developers",
        "developer",
        "guideline",
    ]

    required_words_fact9 = [
        "make",
        "moral",
        "decision",
        "decisions",
    ]
    required_words_fact10 = [
        "how",
        "benefit",
        "society",
        "community",
        "people",
        "benefits",
        "advantage",
        "advantages",
    ]

    required_words_fact11 = [
        "prevent",
        "preventing",
        "avoiding",
        "misuse",
        "abuse",
        "misapplication",
    ]
    required_words_fact12 = [
        "ethical",
        "considerations",
        "for",
        "research",
        "studies",
        "investigations",
    ]
    required_words_fact13 = [
        "explainable",
    ]

    required_words_fact14 = [
        "examples",
        "of",
        "behaving",
        "act",
        "acting",
        "unethical",
        "misbehavior",
        "misconduct",
        "unethically",
    ]
    required_words_fact15 = [
        "how",
        "to",
        "protect",
        "privacy",
        "from",
        "data",
        "personal",
        "information",
        "info",
    ]

    required_words_fact16 = [
        "can",
        "have",
        "emotions",
        "or",
        "consciousness",
        "feelings",
        "reaction",
        "feeling",
        "reactions",
        "emotion",
    ]
    required_words_fact17 = [
        "role",
        "of",
        "human",
        "ovesight",
        "in",
        "development",
        "supervision",
        "supervising",
        "supervise",
        "observe",
        "observation",
    ]
    required_words_fact18 = [
        "how",
        "can",
        "bias",
        "in",
        "reduce",
        "biases",
        "prejudice",
        "prejudices",
    ]
    required_words_fact19 = [
        "how",
        "can",
        "contribute",
        "to",
        "education",
        "help",
        "helps",
        "contribute",
        "assist",
        "assists",
    ]
    required_words_fact20 = [
        "ethical",
        "considerations",
        "when",
        "using",
        "on",
        "art",
        "or",
        "music",
        "creative",
        "creativity",
        "creatives",
        "arts",
        "musics",
        "movies",
        "movie",
    ]

    # checking the word if it is on the array of possible words user may use
    # also prompting  the response function
    # I used the same principle from another for loop I made to check
    # if it's related to AI ethics but now to check the words used by the user:
    # for word in message:
    #         if word in ai_keywords:
    #             ai_related = True

    # 1.What is the history of AI Ethics
    for word in message:
        if word in required_words_fact1:
            response(
                fact_lists[0],
                ["history", "ai", "ethics"],
                user_response=True,
            )

    # 2.what is AI ethics
    response(
        fact2,
        ["what", "is", "ai", "ethics"],
        required_words=["what", "ethics"],
    )

    # 3.Can AI impact jobs/employment:
    for word in message:
        if word in required_words_fact3:
            response(
                fact3,
                ["ai", "impact", "jobs"],
                user_response=True,
            )

    # 4.How can I keep my job even if there's AI
    for word in message:
        if word in required_words_fact4:
            response(
                fact4,
                ["jobs", "ai", "employment", "job"],
                user_response=True,
            )

    # 5.How does bias happen in AI
    for word in message:
        if word in required_words_fact5:
            response(
                fact5,
                ["bias", "ai"],
                user_response=True,
            )

    # 6.what are the risk of using AI
    for word in message:
        if word in required_words_fact6:
            response(
                fact6,
                ["risk", "using", "ai"],
                user_response=True,
            )

    # 7.How can we ensure transparency in AI decision-making?
    for word in message:
        if word in required_words_fact7:
            response(
                fact7,
                ["transparency", "ai", "decision", "making"],
                user_response=True,
            )

    # 8.What ethical guidelines do AI developers follow?
    for word in message:
        if word in required_words_fact8:
            response(
                fact8,
                ["ensure", "transparency", "ai", "decision", "making"],
                user_response=True,
            )

    # 9.Can AI systems make moral decisions?
    for word in message:
        if word in required_words_fact9:
            response(
                fact9,
                ["can", "ai", "decision"],
                user_response=True,
            )

    # 10.How can AI benefit society ethically?
    for word in message:
        if word in required_words_fact10:
            response(
                fact10,
                ["ai", "benefits", "benefit", "advantages", "advantage"],
                user_response=True,
            )

    # 11.What steps can be taken to prevent AI from being misused?
    for word in message:
        if word in required_words_fact11:
            response(
                fact11,
                ["misuse", "abuse", "misapplication"],
                user_response=True,
            )

    # 12.Are there ethical considerations in AI research?
    for word in message:
        if word in required_words_fact12:
            response(
                fact12,
                ["studies", "study", "research"],
                user_response=True,
            )

    # 13.What is explainable AI, and why is it important?
    for word in message:
        if word in required_words_fact13:
            response(
                fact13,
                ["explainable"],
                user_response=True,
            )

    # 14.Are there examples of AI systems behaving unethically?
    for word in message:
        if word in required_words_fact14:
            response(
                fact14,
                ["ai", "behaving", "unethical"],
                user_response=True,
            )

    # 15.How can individuals protect their privacy from AI systems?
    for word in message:
        if word in required_words_fact15:
            response(
                fact15,
                [
                    "protect",
                    "privacy",
                ],
                user_response=True,
            )

    # 16.Can AI have emotions or consciousness?
    for word in message:
        if word in required_words_fact16:
            response(
                fact16,
                ["have", "emotions", "consciousness"],
                user_response=True,
            )

    # 17.What role does human oversight play in AI development?
    for word in message:
        if word in required_words_fact17:
            response(
                fact17,
                ["ovesight", "ai", "development"],
                user_response=True,
            )

    #  18.How can bias in AI be reduced?
    for word in message:
        if word in required_words_fact18:
            response(
                fact18,
                ["bias", "ai", "reduce"],
                user_response=True,
            )

    # 19.How can AI contribute to education while addressing ethical concerns such as bias in learning materials?
    for word in message:
        if word in required_words_fact19:
            response(
                fact19,
                ["contribute", "education"],
                user_response=True,
            )

    # 20.What ethical considerations arise when using AI in creative fields, such as art and music?
    for word in message:
        if word in required_words_fact20:
            response(
                fact20,
                ["ethical", "considerations", "to", "creatives"],
                user_response=True,
            )

    best_match = max(highest_prob_list, key=highest_prob_list.get)
    # print(highest_prob_list)
    # print(f'Best match = {best_match} | Score: {highest_prob_list[best_match]}')

    if ai_related == False:
        return long.unknown() if highest_prob_list[best_match] < 1 else best_match
    else:
        return long.unknown_ai() if highest_prob_list[best_match] < 1 else best_match


# Used to get the response
def get_response(user_input):
    split_message = re.split(r"\s+|[,;?!.-]\s*", user_input.lower())
    response = check_all_messages(split_message)
    return response


# Testing the response system
while True:
    print("Bot: " + get_response(input("You: ")))
    print("")
