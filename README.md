# Cognitive Computing on Personalised Data

## Team members

* Hasnain Sayyed - hasnain.sayyed@vit.edu.in
* Bhargav Mahajan - bhargav.mahajan@vit.edu.in
* Ayush Tripathi - ayush.tripathi@vit.edu.in
* Darshan Mahankar - darshan.mahankar@vit.edu.in


## Description

* Because technology is constantly being updated, YouTube serves as a platform for these updates to reach a large audience.
* A lot of people can't afford paid courses on various Edtech platforms like Coursera, Udemy, etc.
* Thus, learning through Youtube is the only way out. But, watching Youtube tutorials does not provide credibility to showcase as a criteria of employability. 
* As a result, we created an interactive and user-friendly mobile application that will aid in the credibility of YouTube playlists.
* GoalTube is an AI platform that provides credibility to learners across all backgrounds through our dynamic and customizable test who aim to educate themselves through platforms like YouTube.
* The user can sign in with their Google account and add the YouTube playlist that they want to finish. The Playlist will not be added to the course list until it has been approved by the admin panel. Following videos, the user will be required to complete a quiz in which the questions are generated based on the subtitles extracted from the video using NLP(Natural Language Processing). Users can also view and watch playlists uploaded by other users.
* If a user believes that a question or answer is incorrect, they can report it to the admin panel, and the admin panel will investigate further.
* If the user receives a certain number of passing points at the end of all videos and quizzes, they will be certified for that course.

## Links
* GitHub Repo link: [Link to repository](https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data)

## Technology stack

Tools and technologies that you learnt and used in the project.

1. NextJS
2. Langchain
3. Huggingface API
4. Python Flask
5. Pinecone
6. Firebase

## Project Setup
* For this project, you will have to install packages given in requirements.txt file in the repository, as well as u need openai api key (GPT-4 LLM) for langchain to process the textual documents and data of our application same goes for the output obtained and context length of the chat. The steps to do so are:
  > Clone our repository -> npm install command for NextJs frontend node modules -> pip install requirement.txt for flask backend -> if any package found missing just copy the package name and npm install of pip install it in respective codes
* Run the following commands in separate terminals:
  > For Frontend : npm run dev

  > For Backend : Python app.py 

## Usage
* After setup, you can open the link provided for the localhost port.After that, you reach the login screen.
* You can login using your google account which will read your profile name, email, phone and photo and store them in the database as user data. 
* Once logged in, you will see options of via text, image in the home page.
* You can choose to go to the chatbot in the AI chatbot tab
* Similarly you can also go to the image generation tab if you just want to generate an image
* for other file types like audio, video we have that functionality integrated in the AI chatbot itself no seperate tabs for that
* In AI chatbot, you can see the chat window in the user input textarea we have provided the options of uploading image, video, audio and text
* There are limitations of which individual type of respective inputs are accepted in our model
  > For Image : JPG, JPEG, PNG

  > For Audio : MP3

  > For Video : Youtube video links only (should be containing subtitles in english)
* Also TEXT-TO-IMAGE, just have to choose the option and enter the text in the same textarea and you will get the output in the chat window itself, and you can continue with the chat.

## Flowchart

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/Screenshot%202024-03-19%20194519.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/Screenshot%202024-03-19%20194527.png" width="1000">


## Applications

* Content Curation, News Aggregation, Document Review
* Academic Research, Content Extraction
* Educational Learning, Business Intelligence Reports
* Face Recognition, Security & Surveillance
* Accessibility, Content Generation
* Visual Search, Tourism & Navigation
* Media & Entertainment, Interview Analysis
* Healthcare Services & Professionals

## Future scope

* The Future Scope of this application includes Generative AI functionality.
* Increasing the no of Format accepted by the model 
in each of the image, text, audio and videos.
* Scope of Adding online image, text, audio, video links 
as input.
* Addition of browsing facilities in a seperate panel, running parallel to chat-window of our application so that we can easily access external websites.
* Can train our own models for more faster response to the users

## Screenshots

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/Screenshot%202024-03-10%20at%209.49.36%20AM.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/chat-window.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/dashboard.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/file-text.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/file-text.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/image-text.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/mp3-text.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/text-image.png" width="1000">

<img src="https://github.com/ayush-t02/Cognitive_Computing_on_Personalized_Data/blob/master/working/video-text%2010.38.12%20AM.png" width="1000">
