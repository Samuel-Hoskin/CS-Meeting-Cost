import pandas as pd
import json

df = pd.read_csv(r'SalaryData.csv')

# export data to JSON and JS
result = df.to_json (orient="records")
parsed = json.loads(result)
salaryDataJS = open('salaryData.js', "w")
salaryDataJS.write("let salaryData = ")

salaryDataJS.write(result)

salaryDataJS.close()
