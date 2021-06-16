import requests
from bs4 import BeautifulSoup
import json

URL = "https://www.pw.edu.pl/Rekrutacja/Studia-I-i-II-stopnia/Studia-stacjonarne-I-stopnia-i-jednolite/Progi-punktowe-z-ubieglych-lat"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

majors_data = soup.find_all("tr")[1:]

data = {"majors": []}

for major in majors_data:
    major = major.find_all("td")
    base_num = 0

    if len(major) == 6:
        major_name = major[0].text.strip()
        base_num = 1

    faculty_name = major[base_num].text.strip()
    pts_2017 = major[base_num+1].text.strip()
    pts_2018 = major[base_num+2].text.strip()
    pts_2019 = major[base_num+3].text.strip()
    pts_2020 = major[base_num+4].text.strip()

    data["majors"].append({
        "major": major_name,
        "faculty": faculty_name,
        "pts2017": pts_2017,
        "pts2018": pts_2018,
        "pts2019": pts_2019,
        "pts2020": pts_2020
    })

with open("data.json", "w", encoding="utf8") as f:
    json.dump(data, f, ensure_ascii=False)
