import requests
from bs4 import BeautifulSoup
import os
# This will script will ask you which movie you want to get the cover art for then put it in the images folder

API_KEY = "2afd0438"


movie_title = input("Enter a movie title: ")


url = f"http://www.omdbapi.com/?apikey={API_KEY}&t={movie_title}"


response = requests.get(url)
data = response.json()

# Check if the response is valid and contains movie information
if data["Response"] == "True":
    # Get the URL for the movie cover art
    cover_url = data["Poster"]
    
    # Send a request to download the image file
    response = requests.get(cover_url)
    
    # Check if the response is valid and save the image file
    if response.status_code == 200:
        # Create a folder for the images if it doesn't exist
        folder_path = "images"
        if not os.path.exists(folder_path):
            os.mkdir(folder_path)
        
        # Save the image file in the images folder
        file_path = os.path.join(folder_path, f"{movie_title}.jpg")
        with open(file_path, "wb") as f:
            f.write(response.content)
            
        print("Movie cover art downloaded successfully.")
    else:
        print("Error: Could not download movie cover art.")
else:
    print(f"Error: Could not retrieve data for {movie_title}")
