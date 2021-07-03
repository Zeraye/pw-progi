import requests
from bs4 import BeautifulSoup
import json

URL = "https://www.pw.edu.pl/Rekrutacja/Studia-I-i-II-stopnia/Studia-stacjonarne-I-stopnia-i-jednolite/Progi-punktowe-z-ubieglych-lat"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

majorsData = soup.find_all("tr")[1:]

data = {"majors": []}
id = 0

for majorData in majorsData:
    majorData = majorData.find_all("td")
    controlNumber = 0

    if len(majorData) == 6:
        majorName = majorData[0].text.strip()
        controlNumber = 1

    facultyName = majorData[controlNumber].text.strip()
    tholds = [majorData[controlNumber+i].text.strip() for i in range(1, 5)]

    data["majors"].append({
        "id": id,
        "major": majorName,
        "faculty": facultyName,
        "thold": {
            "2017": tholds[0],
            "2018": tholds[1],
            "2019": tholds[2],
            "2020": tholds[3]}
    })

    id += 1

with open("majors.json", "w", encoding="utf8") as file:
    json.dump(data, file, ensure_ascii=False)
