
'''
line by line read students performance, and get the average of their math, reading and writing scores
gender race/ethnicity  parental level of education     lunch   test preparation course math score      reading score   writing score
'''

import csv

math = writing = reading = count = 0

with open('StudentsPerformance.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        math = math + int(row['math score'])
        writing = writing + int(row['writing score'])
        reading = reading + int(row['reading score'])
        count = count + 1

print(math / count)
print(writing / count)
print(reading / count)
print(count)


# The students below average need to work on the relevant material.
# They can also form a study group nearby
