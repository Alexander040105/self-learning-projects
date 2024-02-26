from prettytable import from_csv
from prettytable import MSWORD_FRIENDLY
from prettytable import ORGMODE
from prettytable import DOUBLE_BORDER

csv_filesko = 'C:\\Users\\Alexander Jon\\Downloads\\videogames.csv'
def table_maker_csv(csv_filesko):
    try:
        with open(csv_filesko) as f:
            table = from_csv(f)
            table.set_style(DOUBLE_BORDER)
            print(table)
    except FileNotFoundError:
            raise FileNotFoundError(f"The file '{csv_filesko}' was not found.")
        
table_maker_csv(csv_filesko)




# with open('C:\\Users\\Alexander Jon\\Downloads\\videogames.csv') as f:
#     table = from_csv(f)
#     table.set_style(DOUBLE_BORDER)
    