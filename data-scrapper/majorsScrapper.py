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
    thold2017 = majorData[controlNumber+1].text.strip()
    thold2018 = majorData[controlNumber+2].text.strip()
    thold2019 = majorData[controlNumber+3].text.strip()
    thold2020 = majorData[controlNumber+4].text.strip()

    data["majors"].append({
        "id": id,
        "major": majorName,
        "faculty": facultyName,
        "spots": 0,
        # bachelor, engineering,
        "type": "engineering",
        "lang": "pl",
        "loc": "warsaw",
        "thold": {
            "2017": thold2017,
            "2018": thold2018,
            "2019": thold2019,
            "2020": thold2020},
        "subs": {
            "mth": 1,
            "phy": 1,
            "chm": 0.5,
            "cs": 0.75,
            "bio": 0.5,
            "geo": 0,
            "civ": 0,
            "pol": 0,
            "his": 0,
            "fl": 0.25
        },
        "fav": False,
    })

    id += 1

with open("majors.json", "w", encoding="utf8") as f:
    json.dump(data, f, ensure_ascii=False)
