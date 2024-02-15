from prettytable import from_csv

with open("D:\\63947\\Documents\\GitHub\\First-Year-Assignments-Projects\\self-learning\\csvs\\mapsscraper (1).csv") as fp:
    mytable = from_csv(fp)
    print(mytable)