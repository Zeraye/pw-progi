import requests
from bs4 import BeautifulSoup

URL = "https://www.pw.edu.pl/Rekrutacja/Studia-I-i-II-stopnia/Studia-stacjonarne-I-stopnia-i-jednolite/Progi-punktowe-z-ubieglych-lat"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

majors_data = soup.find_all("tr")

for major_data in majors_data:
    major = major_data[0]
    faculty = major_data[1]
    pts_2017 = majors_data[2].find("p").text
    pts_2018 = majors_data[3].find("p").text
    pts_2019 = majors_data[4].find("p").text
    pts_2020 = majors_data[5].find("p").text
    break
